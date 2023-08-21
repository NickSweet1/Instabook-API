const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const connection = require('../config/connection');
const { usernames, emails, getRandomThought } = require('./data'); 

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to the databse');
      // Delete the collections if they exist
      let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
      if (userCheck.length) {
        await connection.dropCollection('users');
        console.log('Users collection dropped');
      }
  
      let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
      if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
        console.log('Thoughts collection dropped');
      }
  
      for (let i = 0; i < usernames.length; i++) {
        const newUser = await User.create({
            username: usernames[i],
            email: emails[i]
        });

        await Thought.create({
            thoughtText: getRandomThought(),
            username: newUser.username,
            userId: newUser._id
        });
    }
    console.info('Seeding complete!');
    process.exit(0);
});









    // // Create empty array to hold the students
    // const students = [];
  
    // // Loop 20 times -- add students to the students array
    // for (let i = 0; i < 20; i++) {
    //   // Get some random assignment objects using a helper function that we imported from ./data
    //   const assignments = getRandomAssignments(20);
  
    //   const fullName = getRandomName();
    //   const first = fullName.split(' ')[0];
    //   const last = fullName.split(' ')[1];
    //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
  
    //   students.push({
    //     first,
    //     last,
    //     github,
    //     assignments,
    //   });
    // }