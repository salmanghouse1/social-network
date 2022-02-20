const { Users } = require('../models');

const userController = {
    // the functions will go in here as methods
    getAllUsers(req, res) {
        Users.find().then((dbUserData) => {
                res.json(dbUserData);
                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};

module.exports = userController;