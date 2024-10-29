import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey =process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_SECRET,
});

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

app.post("/register", async (req, res) => {
  const { name, email, address, phone, password } = req.body;

  if (!name || !email || !address || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").insert([
      {
        email,
        password: hashedPassword,
        address,
        phone,
        name,
      },
    ]);

    if (error) {
      console.error("Error inserting user into users table:", error);
      return res.status(500).json({
        message: "Error registering user",
        error: error.message,
      });
    }

    res.status(201).json({
      message: "User registered successfully",
      user: data,
    });
  } catch (err) {
    console.error("Unexpected Error:", err);
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});

app.post("/login", async (req, res) => {
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

    res.status(200).json({
      message: "Login successful",
      user: {
        email: users.email,
        address: users.address,
        phone: users.phone,
        name: users.name,
      },
    });
  } catch (err) {
    console.error("Unexpected Error:", err);
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
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

app.post("/upload", async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !description || !price || !image) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name: name,
          description: description,
          price: price,
          image:image,
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
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
