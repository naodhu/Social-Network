const { Thought, User } = require("../models");

// Set up the thought controller methods
const thoughtController = {
  // Get all thoughts and also populate its associated user data (don't forget to include the user's associated username)
  getAllThoughts(req, res) {
    Thought.find({})
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get a single thought by its _id and also populate its associated reactions (don't forget to include the user's associated username)
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a thought (don't forget to push the created thought's _id to the associated user's thoughts array field)  and also push the new thought's _id to the associated user's thoughts array field
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) =>
        res
          .status(200)
          .json({ message: "Thought has been created", data: dbThoughtData })
      )
      .catch((err) => res.status(400).json(err));
  },

  // Update a thought by its _id and also push the new thought's _id to the associated user's thoughts array field
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true, // return the new document
      runValidators: true, // validate the data before updating
    })
      .then((dbThoughtData) => {
        // if no thought is found, send 404
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res
          .status(200) // if thought is found, send 200
          .json({ message: "Thought has been updated ", data: dbThoughtData });
      })
      .catch((err) => res.status(400).json(err)); // if error, send 400
  },

  // Delete a thought by its _id and also pull the thought's _id from the associated user's thoughts array field
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          {
            return User.findOneAndUpdate(
              { _id: dbThoughtData.userId }, // Find the user by its id
              { $pull: { thoughts: params.id } }, // Pull the thought's id from the user's thoughts array
              { new: true }
            );
          }
        }
        res.status(200).json({ message: "Thought has been deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },

  // Reaction routes. Requires thoughtId in params and reaction body to be passed in with the request to create a reaction to a thought or to pull and delete a reaction by its reactionId value in the params object.
  async createReaction({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId }, // Find the thought by its id
        { $push: { reactions: body } }, // Push the new reaction to the thought's reactions array
        { new: true, runValidators: true } // Set new to true to return the updated thought and runValidators to true to ensure that the update operation adheres to the model's schema
      );

      if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }

      res
        .status(202)
        .json({ message: "New reaction created", data: dbThoughtData });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Delete a reaction to a thought by its reactionId value in the params object.
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId }, // Find the thought by its id
      { $pull: { reactions: { reactionId: params.reactionId } } }, // Pull the reaction by its reactionId value from the thought's reactions array
      { new: true } // Set new to true to return the updated thought
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.status(202).json({ message: "Reaction has been  deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtController;
