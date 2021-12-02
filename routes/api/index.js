const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thought', thoughtRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js
router.use('/user', userRoutes);

module.exports = router;

