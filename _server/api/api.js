const router = require('express').Router();

// api router will mount other routers for all our resources.
router.use('/categories', require('./category/categoryRoutes'));
router.use('/recipes', require('./recipe/recipeRoutes'));

module.exports = router;
