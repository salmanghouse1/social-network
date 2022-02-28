const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtsRoutes = require('./thoughts-routes');
// const friendsRoutes = require('./friend-routes')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
// router.use('/friends', friendsRoutes);
module.exports = router;