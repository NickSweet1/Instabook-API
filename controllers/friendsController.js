const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
  async newFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.friendId } },
        { new: true }
      );

      if (!newFriend) {
        return res
          .status(404)
          .json({
            message: `Friend with the id of ${req.params.userId} was not found.`,
          });
      }
      res.json(newFriend);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: req.body.friendId } },
        { new: true }
      );
      if (!friend) {
        return res
          .status(404)
          .json({
            message: `Friend with the id of ${res.params.userId} was not found.`,
          });
      }
      res.json(friend);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
