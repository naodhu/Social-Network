const express = require("express"); // Import the express module
const mongoose = require("mongoose"); // Import the mongoose module
const routes = require("./routes"); // Import the routes module
const db = require("./config/connection"); // Import the connection module

const app = express(); // Create an express server
const PORT = process.env.PORT || 3001; // Define the port

app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded data
app.use(require("./routes")); // Use the imported routes

mongoose.connect( // Connect to the MongoDB database
  process.env.MONGODB_URI || "mongodb://localhost:27017/noSQL-project", 
  { 
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.use(routes); // Use the imported routes
app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));
