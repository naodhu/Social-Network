// Import the required Mongoose modules
const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

// Define the User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, // Ensure unique usernames
      required: true, // Username is required
      trim: true, // Trim any leading/trailing whitespace
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true, // Ensure unique email addresses
      // match: [/.+@.+\..+/, "Must match a valid email address"], // Validate email format
      validate: {
        validator: function (value) {
          return;
          /.+@.+\..+/.test(value);
        },
        message: "Invalid email format!",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // Store ObjectIds referencing Thought documents
        ref: "Thought", // Reference the Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, // Store ObjectIds referencing User documents
        ref: "User", // Reference the User model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Enable virtual properties for JSON serialization
      getters: true, // Enable getters for JSON serialization
    },
  }
);

// Create a virtual property to count the number of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model based on the User schema
const User = model("User", UserSchema);

// Export the User model
module.exports = User;
