const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route("/").get(getAllThoughts);
router.route("/:id").get(getSingleThought).post(createNewThought).put(updateThought).delete(deleteThought);