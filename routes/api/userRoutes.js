const router = require("express").Router();

const {
    getUsers,
    newUser,
    getSingleUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route("/").get(getUsers).put(newUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
