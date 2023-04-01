const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({})
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

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

  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) =>
        res
          .status(200)
          .json({ message: "Thought has been created", data: dbThoughtData })
      )
      .catch((err) => res.status(400).json(err));
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res
          .status(200)
          .json({ message: "Thought has been updated ", data: dbThoughtData });
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          {
            return User.findOneAndUpdate(
              { _id: dbThoughtData.userId },
              { $pull: { thoughts: params.id } },
              { new: true }
            );
          }
        }
        res.status(200).json({ message: "Thought has been deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },

  async createReaction({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
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

  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
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
