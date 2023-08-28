const router = require("express").Router();

const {
  getUsers,
  newUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

const {
  newFriend,
  deleteFriend,
} = require("../../controllers/friendsController");

router.route("/").get(getUsers).post(newUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

module.exports = router;
