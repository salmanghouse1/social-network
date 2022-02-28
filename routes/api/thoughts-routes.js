const router = require('express').Router();
const {
    getAllThoughts,
    getAllThoughtsById,
    addThoughts,
    addReaction,
    removeReaction,
    deleteThought,
    updateThought
} = require('../../controllers/thought-controller');



router
    .route('/')
    .get(getAllThoughts)
    .post(addThoughts)


router
    .route('/:id')
    .get(getAllThoughtsById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


// router
//     .route('/:userId/friends/:friendId')
//     .post(getAllUsersByIdandFriendsById)
//     .delete(deleteByIdandFriendsById)


module.exports = router;