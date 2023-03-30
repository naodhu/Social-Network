// Import the Express router and create a new instance
const router = require("express").Router();

// Import thought-related controller methods from thought-controller module
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Route for getting all thoughts and creating a new thought
router
  .route("/")
  .get(getAllThoughts) // Get all thoughts
  .post(createThought); // Create a new thought

// Route for getting, updating, and deleting a specific thought by ID
router
  .route("/:id")
  .get(getThoughtById) // Get a thought by its ID
  .put(updateThought) // Update a thought by its ID
  .delete(deleteThought); // Delete a thought by its ID

// Route for creating a new reaction for a specific thought
router.route("/:thoughtId/reactions").post(createReaction); // Create a new reaction for a thought

// Route for deleting a specific reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction); // Delete a reaction from a thought

// Export the router for use in the application
module.exports = router;
