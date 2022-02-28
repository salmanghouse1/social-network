const { process_params } = require('express/lib/router');
const { Thoughts, Users } = require('../models');

const thoughtsController = {
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

    addThoughts(req, res) {
        Thoughts.create(req.body).then((dbUserData3) => {

                return Users.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: dbUserData3._id } }, { new: true })

            }).then((dbData) => {
                if (!dbData) {
                    return res.status(404).json({ message: 'Thought Created but no match between user id' })
                }
                res.json({
                    dbData
                }).status(200);

            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateThought(req, res) {
        Thoughts.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'Id not found with the thought' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thoughts.findOneAndRemove({ _id: req.params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'cannot delete the id is not found' });
                }

                return Users.findOneAndUpdate({ thoughts: req.params.id }, { $pull: { thoughts: req.params.id } }, { new: true });
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Thought created but no user with this id!' });
                }
                res.json({ message: 'Thought successfully deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },




    addReaction(req, res) {
        if (req.body.username && req.body.reactionBody) {
            Thoughts.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $addToSet: {
                    reactions: req.body
                }
            }).then((data) => {
                if (!data) {
                    return res.json("No id found").status(404);
                }
                res
                    .json("id found updating")
                    .status(200);
            })
        } else {
            res.json("Set proper body, username and reactionBody").status(404);
        }
    },


    removeReaction(req, res) {
        if (req.body.reactionId) {
            Thoughts.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $pull: {
                    reactions: {
                        reactionId: req.body.reactionId
                    }
                }
            }, { runValidators: true, new: true }).then((data) => {
                if (data) {
                    return res
                        .json("Thought id data not found, change params or body Reaction id not found")
                        .status(404);
                }
                res
                    .json("Removed Reaction")
                    .status(200);

            })
        } else {
            res
                .json("add a body reactionId")
                .status(500);
        }
    }










};

module.exports = thoughtsController;