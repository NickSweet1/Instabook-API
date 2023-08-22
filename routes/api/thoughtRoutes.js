const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createNewThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createNewThought);
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
