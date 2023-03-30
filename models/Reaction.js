// Import the Schema class from the Mongoose module
const { Schema } = require("mongoose");

// Define the Reaction schema
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Schema.Types.ObjectId(), // Generate a new ObjectId by default
  },
  reactionBody: {
    type: String,
    required: true, // Reaction body is required
    maxlength: 280, // Reaction body has a maximum length of 280 characters
  },
  username: {
    type: String,
    required: true, // Username is required
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the current date and time by default
    get: (timestamp) => new Date(timestamp).toLocaleDateString(), // Format the createdAt timestamp using the local date string
  },
});

// Export the Reaction schema
module.exports = ReactionSchema;
