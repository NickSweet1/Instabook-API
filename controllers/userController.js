const { ObjectId } = require("mongoose").Types;
const { Thought, User } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends");
      if (!user) {
        return res
          .status(404)
          .json({ message: `User with id of ${req.params.userId} not found.` });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async newUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: `User with id of ${req.params.userId} not found.` });
      }
      if (req.body.username) {
        user.username = req.body.username;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: `User with id of ${req.params.userId} not found.` });
      }

      await Thought.deleteMany({ username: user.username });
      await user.deleteOne();
      res.json({
        message: `User with id of ${req.params.userId} has been deleted.`,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
