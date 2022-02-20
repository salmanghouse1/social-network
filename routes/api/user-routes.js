const router = require('express').Router();
const {
    getAllUsers,
    getAllUsersById,
} = require('../../controllers/user-controllers');



router
    .route('/')
    .get(getAllUsers)



router
    .route('/:id')
    .get(getAllUsersById)




module.exports = router;