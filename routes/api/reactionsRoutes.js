const router = require("express").Router();

const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionsController");

router.route("/").post(createReaction).delete(deleteReaction);

module.exports = router;

//whole file is unecessary, meet with tutor to see why this method didn't work