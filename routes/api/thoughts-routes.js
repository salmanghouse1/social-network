const router = require('express').Router();
const {
    getAllThoughts,
    getAllThoughtsById,
    addThoughts,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');



router
    .route('/')
    .get(getAllThoughts)


router
    .route('/:id')
    .get(getAllThoughtsById)
    .post(addThoughts)
    //     .put(updateUserById)
    //     .delete(deleteById)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


// router
//     .route('/:userId/friends/:friendId')
//     .post(getAllUsersByIdandFriendsById)
//     .delete(deleteByIdandFriendsById)


module.exports = router;