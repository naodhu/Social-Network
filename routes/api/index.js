
const router = require('express').Router(); // Import the express router
const userRoutes = require('./users'); // Import the user routes
const thoughtRoutes = require('./thoughts'); // Import the thought routes

// Use the imported user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
