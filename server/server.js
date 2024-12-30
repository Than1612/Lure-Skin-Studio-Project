import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
import cloudinary from "cloudinary"
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const secretKey = "secret_key";

const supabaseUrl = "https://vmvxxjofzfpwvatbquhy.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdnh4am9memZwd3ZhdGJxdWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNzA1NjMsImV4cCI6MjA0NTc0NjU2M30.rt7ORhBz7UaHSE_gTWvX-D82uj_CQidpKcC1hVLLovA";
const supabase = createClient(supabaseUrl, supabaseKey);

cloudinary.config({
  cloud_name: "dtuqpup4a",
  api_key: "291317165429892",
  api_secret: "qJq00V57nGffgM_ev-BcG5Tbmnk",
});

const razorpayId = "rzp_test_cpR703nvZzCIdo";
const razorpaySecret = "3r0f7OjbhQUoEgqNTSnePXgI";
const whatsappToken = "EAAXEAIh0ErgBO8lmCtFNfPy7zNA18KVs1ZA8lu5AyD7YV59x2HMG0mTJdcJbVF3ZAjQZCIklmrKCAZBcYbQiDjrEXLoKfu6wrPo5JtAAn1tLK47ZApTxbbY4h8WzgJkboZCx105LJcBz2c5vgDCQE3TGPUL5jphVgZBZBMf2t9ZBtGIiFCqVzGWuCEKna1WY5Nl6q";
const whatsappId = "470207039510486";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token" });
    }
    req.id = decoded.id;
    next();
  });
};

const verifyAdminToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token" });
    }

    try {
      req.id = decoded.id;

      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("role")
        .eq("id", decoded.id)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      if (user.role === "admin") {
        next();
      } else {
        return res.status(403).json({ error: "User is not authorized as admin" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });
};


const uploadCloudinary = async (localFilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
    });
    return response.url;
  } catch (error) {
    console.error(error.message);
  }
};

app.post("/user/register", async (req, res) => {
  // Destructure user inputs from request body
  const { name, email, address, phone, password } = req.body;

  // Validate input fields
  if (!name || !email || !address || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email,
          password: hashedPassword,
          address,
          phone,
          name,
        },
      ])
      .select("*"); // Select all fields to confirm successful insertion

    // Handle Supabase insertion errors
    if (error) {
      console.error("Error inserting user into users table:", error);
      return res.status(500).json({
        message: "Error registering user",
        error: error.message,
      });
    }

    // Remove password from the response for security
    const safeUser = {
      ...data[0],
      password: undefined, // Explicitly exclude the password
    };
    const token = jwt.sign({ id: data.id}, secretKey, {
      expiresIn: "1h",
    });
    // Respond with success
    res.status(201).json({
      message: "User registered successfully",
      user: safeUser,
      token,
    });
  } catch (err) {
    // Catch unexpected errors
    console.error("Unexpected Error:", err);
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});


app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !users) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign({ id: users.id}, secretKey, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful",
      user: {
        email: users.email,
        address: users.address,
        phone: users.phone,
        name: users.name,
      },
      token
    });
  } catch (err) {
    console.error("Unexpected Error:", err);
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});

const handleLogout = () => {
  localStorage.removeItem("userToken");
  window.location.href = "/login";
};

app.get("/user/profile", verifyToken, async (req, res) => {
  try {
    // Use `req.email` from the `verifyToken` middleware
    const { data, error } = await supabase
      .from("users")
      .select("name, email, address, phone")
      .eq("id", req.id)
      .single();

    if (error || !data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching user profile:", err.message);
    res
      .status(500)
      .json({ message: "An error occurred while fetching profile" });
  }
});


app.post("/user/logout", (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(400)
        .json({ message: "Authorization token is required" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token not found" });
    }

    // Optionally, invalidate token if stored on the server
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Error during logout:", err.message);
    res.status(500).json({ message: "An error occurred during logout" });
  }
});



app.post("/upload/pic", upload.single("avatar"), async (req, res) => {
  try {
    const responseUrl = await uploadCloudinary(req.file.path);
    res.json({ picUrl: responseUrl });
  } catch (error) {
    res.status(500).send("Error uploading image");
  }
});

app.post("/upload", verifyAdminToken, async (req, res) => {
  const {
    name,
    price,
    arrival_date,
    description,
    benefits,
    usage_storage,
    loaded_with,
    disclaimer,
    images,
    quantity,
    category,
  } = req.body;

  if (
    !name ||
    !price ||
    !arrival_date ||
    !description ||
    !Array.isArray(benefits) ||
    !Array.isArray(usage_storage) ||
    !Array.isArray(loaded_with) ||
    !Array.isArray(disclaimer) ||
    !Array.isArray(images) ||
    !quantity ||
    !category
  ) {
    return res.status(400).json({ message: "Missing or invalid required fields" });
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price,
          arrival_date,
          description,
          benefits,
          usage_storage,
          loaded_with,
          disclaimer,
          images,
          quantity,
          category,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({
        message: "Error uploading product",
        error: error.message,
      });
    }

    res.status(201).json({
      message: "Product uploaded successfully",
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});


app.post("/create-and-send-payment-link",verifyToken, async (req, res) => {
  const { amount, customerName, customerContact, customerEmail, orderDetails } = req.body;

  if (!amount || !customerName || !customerContact || !customerEmail || !orderDetails || orderDetails.length === 0) {
    console.warn("Request validation failed: missing required fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  const razorpay = new Razorpay({
    key_id: razorpayId,
    key_secret: razorpaySecret,
  });

  const paymentLinkData = {
    upi_link: false,
    amount: amount * 100,
    currency: "INR",
    accept_partial: false,
    first_min_partial_amount: 100,
    expire_by: Math.floor(Date.now() / 1000) + 86400,
    reference_id: `TS${Date.now()}${Math.floor(Math.random() * 1000)}`,
    description: `Payment for ${customerName}`,
    customer: {
      contact: customerContact,
      email: customerEmail,
      name: customerName,
    },
    notify: {
      sms: true,
      email: true,
    },
    reminder_enable: true,
    notes: {
      policy_name: "Policy 1",
    },
    callback_url: "http://localhost:8000/payment/",
    callback_method: "get",
  };

  let paymentLink;
  try {
    console.log("Attempting to create a payment link");
    paymentLink = await razorpay.paymentLink.create(paymentLinkData);
    console.log("Payment link created successfully:", paymentLink.short_url);
  } catch (error) {
    console.error("Error creating payment link:", error.message);
    return res.status(500).json({ error: "Failed to create payment link" });
  }

  const orderItems = orderDetails
    .map(item => `- **${item.productName}**: ₹${item.price} x ${item.quantity}`)
    .join("\n");

  const message = `
Hello ${customerName},

Thank you for your order!

Here are the payment details:
- Amount: ₹${amount}
- Description: Payment for ${customerName}

Order Details:
${orderItems}

Click the link below to complete your payment:
${paymentLink.short_url}

If you have any questions, feel free to reply to this message.

Thank you for shopping with us!`;

try {
  console.log("Attempting to send WhatsApp message to:", customerContact);

  const { data: users, error: fetchError } = await supabase
    .from("users")
    .select("hasContacted")
    .eq("phone", customerContact)
    .single();

  if (fetchError) {
    console.error("Error fetching user info:", fetchError.message);
    throw new Error("Failed to check contact status");
  }

  if (!users || !users.hasContacted) {
    console.log("Customer not contacted before, sending template message...");
    await axios.post(
      `https://graph.facebook.com/v21.0/${whatsappId}/messages`,
      {
        messaging_product: "whatsapp",
        to: customerContact,
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_US" },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${whatsappToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { data: updatedData, error: updateError } = await supabase
      .from("users")
      .update({ hasContacted: true })
      .eq("phone", customerContact);

    if (updateError) {
      console.error("Error updating user contact status:", updateError.message);
      throw new Error("Failed to update contact status");
    }

    console.log("Template message sent and user marked as contacted.");
    res.status(200).json({
      message: "Payment link created and template sent via WhatsApp",
      paymentLink: paymentLink.short_url,
    });
  } else {
    console.log("Customer already contacted, sending detailed payment info...");
    const whatsappResponse = await axios.post(
      `https://graph.facebook.com/v21.0/${whatsappId}/messages`,
      {
        messaging_product: "whatsapp",
        to: customerContact,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${whatsappToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Detailed payment info sent successfully:", whatsappResponse.data);
    res.status(200).json({
      message: "Payment link created and detailed info sent via WhatsApp",
      paymentLink: paymentLink.short_url,
    });
  }
} catch (error) {
  console.error("Error sending WhatsApp message:", error.message);
  res.status(500).json({
    error: "Failed to send WhatsApp message, but payment link was created",
    paymentLink: paymentLink.short_url,
  });
}


});

app.post("/add-to-cart", verifyToken, async (req, res) => {
  const { p_id, name, price } = req.body;
  const customer_id = req.id; // Use customer_id from the decoded token

  try {
    console.log("Fetching cart for customer_id:", customer_id);

    const { data: carts, error: fetchError } = await supabase
      .from("cart")
      .select("items")
      .eq("customer_id", customer_id);

    if (fetchError) {
      console.error("Error fetching cart:", fetchError.message);
      throw new Error("Supabase query failed while fetching cart.");
    }

    const cart = carts && carts.length > 0 ? carts[0] : null;

    if (cart) {
      console.log("Cart found for customer_id:", customer_id);
      let items = cart.items ? [...cart.items] : []; // Initialize items as an array if null
      let found = false;

      items = items.map((item) => {
        if (item.p_id === p_id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      if (!found) {
        items.push({ p_id, name, quantity: 1, price });
      }

      try {
        const { data: updatedData, error: updateError } = await supabase
          .from("cart")
          .update({ items })
          .eq("customer_id", customer_id)
          .select();

        if (updateError) {
          console.error("Error updating cart:", updateError.message);
          throw new Error("Supabase query failed while updating cart.");
        }

        res.status(201).json({
          message: "Successfully updated cart!",
          data: updatedData,
        });
      } catch (error) {
        console.error("Error updating cart:", error.message);
        res.status(500).json({
          message: "Couldn't update cart",
          error: error.message,
        });
      }
    } else {
      console.log("No cart found for customer_id, creating a new cart.");
      const items = [{ p_id, name, quantity: 1, price }];
      try {
        const { data: insertData, error: insertError } = await supabase
          .from("cart")
          .insert({ items, customer_id })
          .select();

        if (insertError) {
          console.error("Error creating cart:", insertError.message);
          throw new Error("Supabase query failed while creating cart.");
        }

        res.status(201).json({
          message: "Successfully created cart and added product!",
          data: insertData,
        });
      } catch (error) {
        console.error("Error creating cart:", error.message);
        res.status(500).json({
          message: "Couldn't create cart",
          error: error.message,
        });
      }
    }
  } catch (error) {
    console.error("Error in add-to-cart endpoint:", error.message);
    res.status(500).json({
      message: "Couldn't fetch cart",
      error: error.message,
    });
  }
});



app.post("/delete-from-cart",verifyToken,async(req,res)=>{
  const {id,customer_id}=req.body;
  try {
    const {data:carts,error:fetchError}=await supabase.from('cart').select('items').eq('customer_id',customer_id);
    const cart=carts && carts.length!=0 ? carts[0]:null;
    if(cart){
      let items= cart.items?.length==0 ? [] : cart.items;
      items=items.map((item)=>{
        if(item.p_id==id){
          if(item.quantity==1){
            return null;
          }else{
            return {...item,quantity:item.quantity-1}
          }
        }
      })
      try {
        const {data:updatedCart,error:updateError}=await supabase.from('cart').update({items}).eq('customer_id',customer_id).select();
        if(updatedCart){
          res.status(201).json({
            message:"Item successfully deleted !!!",
            data:updatedCart
          })
        }else throw updateError
      } catch (error) {
        res.status(500).json({
          message:"Item could not be deleted !!!",
          error:error
        })
      }
    }else{
      throw fetchError;
    }
  } catch (error) {
    res.status(500).json({
      message:"Cart could not be fetched",
      error:error
    })
  }
})

app.post("/delete-cart",verifyToken,async(req,res)=>{
  const {customer_id}=req.body;
  try {
    const {data:carts,error:fetchError}=await supabase.from('cart').select('items').eq('customer_id',customer_id);
    const cart=carts && carts.length!=0 ? carts[0]:null;
    if(cart){
      let items= cart.items?.length==0 ? [] : cart.items;
      items=null
      try {
        const {data:updatedCart,error:updateError}=await supabase.from('cart').update({items}).eq('customer_id',customer_id).select();
        if(updatedCart){
          res.status(201).json({
            message:"Cart successfully deleted !!!",
            data:updatedCart
          })
        }else throw updateError
      } catch (error) {
        res.status(500).json({
          message:"Cart could not be deleted !!!",
          error:error
        })
      }
    }else{
      throw fetchError;
    }
  } catch (error) {
    res.status(500).json({
      message:"Cart could not be fetched",
      error:error
    })
  }
})

app.post("/get-cart",verifyToken,async(req,res)=>{
  const {customer_id}=req.body;
  try {
    const {data:carts,error:fetchError}=await supabase.from('cart').select('items').eq('customer_id',customer_id)
    if(fetchError) throw fetchError
    if(carts){
      res.status(201).json({data:carts})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})



app.get("/get-products",async(req,res)=>{
  try {
    const {data:products,error:fetchError}=await supabase.from('products').select('*')
    if(fetchError) throw fetchError
    if(products){
      res.status(201).json({data:products})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

app.post("/get-product",async(req,res)=>{
  const {p_id}=req.body;
  try {
    const {data:products,error:fetchError}=await supabase.from('products').select('*').eq('id',p_id)
    if(fetchError) throw fetchError
    if(products){
      res.status(201).json({data:products})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
