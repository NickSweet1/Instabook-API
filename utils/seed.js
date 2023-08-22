const mongoose = require("mongoose");
const { User, Thought } = require("../models");
const connection = require("../config/connection");
const {
  usernames,
  emails,
  getRandomThought,
  getRandomReaction,
  getRandomUser,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to the databse");
  // Delete the collections if they exist
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
    console.log("Users collection dropped");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
    console.log("Thoughts collection dropped");
  }
  const thoughtIds = [];

  for (let i = 0; i < usernames.length; i++) {
    const newUser = await User.create({
      username: usernames[i],
      email: emails[i],
    });
    // console.log(newUser);
    const newThought1 = await Thought.create({
      thoughtText: getRandomThought(),
      username: newUser.username,
      userId: newUser._id,
      reactions: [
        { reactionBody: getRandomReaction(), username: getRandomUser() },
        { reactionBody: getRandomReaction(), username: getRandomUser() },
        { reactionBody: getRandomReaction(), username: getRandomUser() },
      ],
    });

    const newThought2 = await Thought.create({
      thoughtText: getRandomThought(),
      username: newUser.username,
      userId: newUser._id,
      reactions: [
        { reactionBody: getRandomReaction(), username: getRandomUser() },
        { reactionBody: getRandomReaction(), username: getRandomUser() },
        { reactionBody: getRandomReaction(), username: getRandomUser() },
      ],
    });

    thoughtIds.push({ thoughtId: [newThought1._id, newThought2._id], userId: newUser._id });
  }
  // console.log(thoughtIds);

  for (let i = 0; i < thoughtIds.length; i++) {
    await User.findOneAndUpdate(
      { _id: thoughtIds[i].userId },
      { $addToSet: { thoughts: { $each: thoughtIds[i].thoughtId} } },
      { new: true }
    );
  }

  console.info("Seeding complete!");
  process.exit(0);
});
