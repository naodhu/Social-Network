const { User, Thought } = require("../models");
const { OjectId } = require("mongoose").Types;

// Set up the user controller methods
const userController = {
  // Get all users and also populate their thoughts and friend list
  getAllUsers(req, res) {
    User.find({}) // find all users
      .select("-__v") // exclude the __v field
      .then((dbUserData) => res.json(dbUserData)) // return the data as json
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get a single user by its _id and also populate their thoughts and friend list
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .select("-__v") // exclude the __v field
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a user and also push the new user's _id to the associated user's friends array field
  createUser({ body }, res) {
    User.create(body) // create a new user
      .then((dbUserData) =>
        res
          .status(200)
          .json({ message: "User has been created", data: dbUserData })
      )
      .catch((err) => res.status(400).json(err));
  },

  // Update a user by its _id and also push the new user's _id to the associated user's friends array field
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      // find the user by id and update the body
      new: true, // return the new document
      runValidators: true, // validate the data before updating
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res
          .status(202)
          .json({ message: "User has been updated", data: dbUserData });
      })
      .catch((err) => res.status(400).json(err));
  },

  // Delete a user by its _id and also remove it from any other user's associated friend list and also remove all of the user's thoughts when deleted
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id }) // find the user by id and delete it
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        // BONUS: Remove a user's associated thoughts when deleted
        Thought.deleteMany({ _id: { $in: dbUserData.thoughts } }) // find the thoughts by id and delete them
          .then(() =>
            res.json({ message: "User and associated thoughts deleted." })
          )
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },

  // Add a new friend to a user's friend list by adding the friend's _id to the user's friend array field
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId }, // find the user by id
      { $addToSet: { friends: params.friendId } }, // add the friend to the user's friend list
      { new: true } // return the new document
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        const friendCount = dbUserData.friends.length;
        res.status(200).json({
          message: "Friend has been added ",
          friendCount, // return the friend count
          data: dbUserData, // return the user data
        });
      })
      .catch((err) => res.status(400).json(err));
  },

  // Remove a friend from a user's friend list by pulling the friend's _id from the user's friend array field
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId }, // find the user by id
      { $pull: { friends: params.friendId } }, // remove the friend from the user's friend list
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.status(202).json({ message: "Friend has been removed " });
      })
      .catch((err) => res.status(400).json(err));
  },
};

// Export the user controller
module.exports = userController;
