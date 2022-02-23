const { process_params } = require('express/lib/router');
const { Thoughts } = require('../models');

const userController = {
    // the functions will go in here as methods
    getAllThoughts(req, res) {
        Thoughts.find({}).then((dbUserData) => {
                res.json(dbUserData);
                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getAllThoughtsById({ params },
        res) {
        Thoughts.find({ _id: params.id }).then((dbUserData2) => {
                console.log("searching by id")
                res.json(dbUserData2);

                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThoughtbyId({ params }, res) {
        Thoughts.findById({
                _id: params.id
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

};

module.exports = userController;