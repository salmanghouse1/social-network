const router = require('express').Router();
const {
    getAllUsers,
    getAllUsersById,
    updateUserById,
    deleteById
} = require('../../controllers/user-controllers');



router
    .route('/')
    .get(getAllUsers)



router
    .route('/:id')
    .get(getAllUsersById)
    .put(updateUserById)
    .delete(deleteById)



router
    .route('/:userId/friends/:friendId')
    .post(getAllUsersByIdandFriendsById)
    .delete(deleteByIdandFriendsById)


module.exports = router;