// Importing express module and creating a router object using its Router() method
const router = require("express").Router();

// Importing the user controller functions to be used with the router
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST requests at /api/users route
router.route("/").get(getAllUsers).post(createUser);

// Set up GET, PUT, and DELETE requests at /api/users/:id route
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST and DELETE requests at /api/users/:userId/friends/:friendId route
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// Exporting the router object to be used in the main application
module.exports = router;
