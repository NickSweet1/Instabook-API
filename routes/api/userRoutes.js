const router = require("express").Router();

const {
  getUsers,
  newUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
