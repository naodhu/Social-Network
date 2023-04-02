// Import the required Mongoose modules and Moment.js for date formatting
const { Schema, model } = require("mongoose");
const moment = require("moment");
const ReactionSchema = require("./Reaction");

// Define the Thought schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true, // Thought text is required
      minLength: 1, // Thought text has a minimum length of 1 character
      maxLength: 280, // Thought text has a maximum length of 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set the current date and time by default
      get: (timestamp) => moment(timestamp).format("MMM DD, YYYY [at] hh:mm a"), // Format the createdAt timestamp
    },
    username: {
      type: String,
      required: true, // Username is required
    },
    reactions: [ReactionSchema], // Embed the Reaction schema as an array
  },
  {
    toJSON: {
      virtuals: true, // Enable virtual properties for JSON serialization
      getters: true, // Enable getters for JSON serialization
    },
    id: false,
  }
);

// Create a virtual property to count the number of reactions
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length; // Return the length of the reactions array
});

// Configure the schema to include virtual properties when calling toObject() and toJSON()
ThoughtSchema.set("toObject", { virtuals: true });
ThoughtSchema.set("toJSON", { virtuals: true });

// Create the Thought model based on the Thought schema
const Thought = model("Thought", ThoughtSchema);

// Export the Thought model
module.exports = Thought;
