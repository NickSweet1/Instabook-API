const router = require("express").Router();

const {
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionsController');

router.route("/").post(createReaction).delete(deleteReaction);

module.exports = router;
