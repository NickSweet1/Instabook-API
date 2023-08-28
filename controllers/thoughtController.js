const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.json({
          message: `No thought found with an id of ${req.params.id}`,
        });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async createNewThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      if (!thought) {
        return res.json({ message: `Please input data for the new thought.` });
      }
      res.status(201).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );
      if (!thought) {
        return res.json({
          message: `No thought found with the id of ${req.params.id}`,
        });
      }

      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });
      if (!thought) {
        return res.status(404).json({
          message: `No thought found with the id of ${req.params.id}`,
        });
      }
      res.json(
        `The thought with a message of: '${thought.thoughtText}' and an id of ${req.params.id} has been deleted.`
      );
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
