// Import the Schema class from the Mongoose module
const { Schema } = require("mongoose");
const moment = require("moment");

//Define the Reaction schema
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, // Use the ObjectId data type
      default: () => new Schema.Types.ObjectId(), // Generate a new ObjectId by default
    },
    reactionBody: {
      type: String, // Reaction body is a string
      required: true, // Reaction body is required
      maxLength: 280, // Reaction body has a maximum length of 280 characters
    },
    username: {
      type: String, // Username is a string
      required: true, // Username is required
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set the current date and time by default
      get: (timestamp) => moment(timestamp).format("MMM DD, YYYY [at] hh:mm a"), // Format the createdAt timestamp
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters for JSON serialization
    },
    id: false, // Prevent virtuals from creating duplicate of _id as `id`
  }
);

// Export the Reaction schema
module.exports = ReactionSchema;
