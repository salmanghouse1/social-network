const { process_params } = require('express/lib/router');
const { Friends } = require('../models');

const friendsController = {
    // the functions will go in here as methods
    addFriend(req, res) {
        Friends.create({
            body
        }).then((data) => {
            console.log("Friend created")
            res.json(data)
        })
    },
    deleteFriend(req, res) {
        Campground.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                console.log(err)
                res.status(400)

            } else {
                console.log(err)
                res.status(200)

            }

        });


    }
}
module.exports = userController;