const router = require("express").Router();

const {
  newFriend,
  deleteFriend,
} = require("../../controllers/friendsController");

router.route("/").post(newFriend).delete(deleteFriend);

module.exports = router;


//whole file is unecessary, meet with tutor to see why this method didn't work