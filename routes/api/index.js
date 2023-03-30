
const router = require('express').Router();
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

// Use the imported user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
