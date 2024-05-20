// Import mongoose
import mongoose from "mongoose";

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  companyName: String,
  applicationDeadline: Date,
  salaryRange: {
    min: Number,
    max: Number,
  },
  jobType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Internship"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Employer schema
const employerSchema = new mongoose.Schema({
  name: String,
  contactEmail: String,
  website: String,
  address: String,
  logoURL: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Application schema
const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  applicantName: String,
  resume: Buffer, // Assuming resume is uploaded and stored as a buffer
  coverLetter: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["JobSeeker", "Employer"],
    default: "JobSeeker",
  },
  profilePicture: String,
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create models from the schemas
const Job = mongoose.model("Job", jobSchema);
const Employer = mongoose.model("Employer", employerSchema);
const Application = mongoose.model("Application", applicationSchema);
const User = mongoose.model("User", userSchema);

export { Job, Employer, Application, User };
