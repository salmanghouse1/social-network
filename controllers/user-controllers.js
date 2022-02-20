const { process_params } = require('express/lib/router');
const { Users } = require('../models');

const userController = {
    // the functions will go in here as methods
    getAllUsers(req, res) {
        Users.find({}).then((dbUserData) => {
                res.json(dbUserData);
                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getAllUsersById({ params },
        res) {
        Users.find({ _id: params.id }).then((dbUserData2) => {
                console.log("searching by id")
                res.json(dbUserData2);

                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    addUser(req, res) {
        Users.create({
                body
            }).then((dbUserData3) => {
                console.log("added User")
                res.json(dbUserData3);

                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    updateUserById({ params }, res) {
        Users.findByIdAndUpdate(params.id, { body })
    },
    deleteById({ params }, res) {
        Users.deleteById({ params })
    }
};

module.exports = userController;