const router = require("express").Router();

const {
    createReaction,
    deleteReaction,
} = require('../../controllers/userController');

router.route("/").post(newFriend).delete(deleteFriend);