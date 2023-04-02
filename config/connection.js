// social-network-NoSQL/config/connection.js

const mongoose = require("mongoose"); // Import the Mongoose module
const dotenv = require("dotenv"); // Import the dotenv module

dotenv.config(); // Configure dotenv

// Define the MongoDB connection string
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/social-network";

// Define the connectDB function
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
      useCreateIndex: true, // Use the new createIndex() function instead of ensureIndex()
      useFindAndModify: false, // Use the new findOneAndUpdate() and findOneAndDelete() functions instead of findAndModify()
    });

    console.log("MongoDB connected successfully."); // Log a success message to the console
  } catch (error) {
    // Catch any errors
    console.error(`Error connecting to MongoDB: ${error.message}`); // Log the error message to the console
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
