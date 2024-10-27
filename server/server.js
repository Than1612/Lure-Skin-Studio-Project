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

const supabaseUrl = "https://qhjyagvhlftsrofaalku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoanlhZ3ZobGZ0c3JvZmFhbGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDA0MjEsImV4cCI6MjA0NTI3NjQyMX0.brDLkHLwmKlRu1BnO_WMmut0Qs_G_lmOK0uyWVRoBNo";
const supabase = createClient(supabaseUrl, supabaseKey);

// Register route
app.post("/register", async (req, res) => {
  const { name, email, address, phone, password } = req.body;

  // Check if required fields are provided
  if (!name || !email || !address || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    // Insert user details into the customers table
    const { data, error } = await supabase.from("customers").insert([
      {
        email,
        password: hashedPassword, // Store the hashed password
        address,
        phone,
        name, // Assuming you want to save the name as well
      },
    ]);

    if (error) {
      console.error("Error inserting user into customers table:", error);
      return res.status(500).json({
        message: "Error registering user",
        error: error.message,
      });
    }

    // Return a success response
    res.status(201).json({
      message: "User registered successfully",
      user: data, // Return customer data if needed
    });
  } catch (err) {
    console.error("Unexpected Error:", err);
    res.status(500).json({
      message: "An unexpected error occurred",
      error: err.message,
    });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Query Supabase to find user with matching email
    const { data: users, error } = await supabase
      .from("customers")
      .select("*")
      .eq("email", email)
      .single(); // We expect only one user to match

    if (error || !users) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Return a success response
    res.status(200).json({
      message: "Login successful",
      user: {
        email: users.email,
        address: users.address,
        phone: users.phone,
        name: users.name, // Include name if needed
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

app.post("/upload", async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
