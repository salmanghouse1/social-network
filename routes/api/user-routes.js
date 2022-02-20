const router = require('express').Router();
const {
    getAllUsers,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/user-controllers');
// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllUsers)
    .post();

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;