const router = require("express").Router();

const {
    getUsers,
    newUser,
    singleUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// router.route("/").get(getUsers).post(newUser);

// router.route("/:userId").get(singleUser).put(updateUser).delete(deleteUser);
