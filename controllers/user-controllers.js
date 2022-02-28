const req = require('express/lib/request');
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
        Users.create(req.body).then((dbUserData3) => {
                console.log("added User")
                res.json(dbUserData3);

                res.status(200);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    updateUserById(req, res) {
        Users.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true,
        }).then((data) => {

            if (!data) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(data);
            res.status(200);


        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    deleteById(req, res) {
        Users.findOneAndDelete({
                _id: req.params.id
            }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
            })
            .then(() => {
                res.status(200).json({ message: 'User deleted!' });

            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getAllUsersByIdAndFriendsById({ params }, res) {
        Users.find({
            _id: params.userId,
            friends: params.friendsId
        })

    },
    addFriend(req, res) {
        Users.findOneAndUpdate({
                _id: params.userId
            }, { $addToSet: { friends: req.params.friendsId } }, { new: true }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    },


    deleteAllUsersByIdAndFriendsById(req, res) {
        Users.findOneAndUpdate({
                _id: params.userId
            }, { $pull: { friends: req.params.friendsId } }, { new: true }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    }
}

module.exports = userController;