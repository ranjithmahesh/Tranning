// Importing modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";
import EmployerRoutes from "./routes/Employer.routes.js";
import errorMiddleware from "./utils/error.js";

// Configuring dotenv
dotenv.config();

// Creating the Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

// Using routes
app.use("/api/user", UserRoutes);
app.use("/api/employer", EmployerRoutes);

// Server setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Applying error middleware after routes
app.use(errorMiddleware);

// Custom error handler
