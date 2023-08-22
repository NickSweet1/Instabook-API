const router = require("express").Router();

const {
  newFriend,
  deleteFriend,
} = require("../../controllers/friendsController");

router.route("/").post(newFriend).delete(deleteFriend);

module.exports = router;
