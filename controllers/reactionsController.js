const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
    async createReaction (req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const { reactionBody } = req.body;
            
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: {reactionBody }}},
                { new: true }
            )
            if (!updatedThought) {
                return res.json({message: `Thoguht with the id of ${thoughtId} does not exist.`})
            }
            res.status(201).json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async deleteReaction (req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const reactionId = req.params.reactionId;

            const updatedThought = await Thought.findByIdAndUpdate( 
                thoughtId,
                { $pull: { reactions: { _id: reactionId } } }, //pulls the reaction from the thought
                { new: true }
            );
            if (!updatedThought) {
                return res.json({ message: `Thought with the id of ${thoughtId} does not exist.` });
            }
            if (!reactionId) {
                return res.json({ message: `Reaction with the id of ${reactionId} does not exist.` });
            }
            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
};