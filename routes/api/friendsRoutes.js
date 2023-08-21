const router = require("express").Router();

const {
    newFriend,
    deleteFriend,
} = require('../../controllers/userController');

router.route("/").post(newFriend).delete(deleteFriend);