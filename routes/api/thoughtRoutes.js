const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createNewThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionsController");

router.route("/").get(getAllThoughts).post(createNewThought);

router
.route("/:thoughtId")
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction).delete(deleteReaction);

module.exports = router;
