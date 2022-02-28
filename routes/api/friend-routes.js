const {
    addFriend,
    deleteFriend
} = require('../../controllers/friends-controllers');





router
    .route('/:friendId')
    .post(addFriend)
    .delete(deleteFriend)



// router
//     .route('/:userId/friends/:friendId')
//     .post(getAllUsersByIdandFriendsById)
//     .delete(deleteByIdandFriendsById)


module.exports = router;