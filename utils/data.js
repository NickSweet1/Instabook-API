const usernames = [
  "awesomeUser123",
  "blueSquirrel42",
  "jazzPanda19",
  "sunshineDreamer",
  "neonTiger88",
  "sparkleWizard",
  "mysticMoonlight",
  "adventureSeeker",
  "happyBee23",
  "crimsonDragon",
  "silverFox67",
  "whisperingWillow",
  "luckyStar21",
  "rainbowSkater",
  "wildflowerGypsy",
  "electricJellyfish",
  "stellarExplorer",
  "cosmicDreamer",
  "oceanWhisper",
  "midnightRider",
];

const emails = [
  "user123@example.com",
  "squirrel42@gmail.com",
  "panda19@yahoo.com",
  "dreamer@example.net",
  "tiger88@hotmail.com",
  "wizard@gmail.com",
  "moonlight@example.net",
  "seeker@yahoo.com",
  "bee23@hotmail.com",
  "dragon@example.com",
  "fox67@gmail.com",
  "willow@yahoo.com",
  "star21@example.net",
  "skater@hotmail.com",
  "gypsy@gmail.com",
  "jellyfish@example.com",
  "explorer@yahoo.com",
  "dreamer@hotmail.com",
  "whisper@example.net",
  "rider@gmail.com",
];

const thoughts = [
  "Just had a great time hiking in the mountains! #NatureLover",
  "Enjoying a relaxing evening with a good book and a cup of tea.",
  "Excited to start a new coding project!",
  "Had a delicious homemade pizza for dinner.",
  "Missing the beach and the sound of the waves.",
  "Spent the day exploring a new city and trying new foods.",
  "Enjoying a lazy Sunday with some Netflix binge-watching.",
  "Just adopted a cute puppy! Meet my new furry friend.",
  "Attended a thought-provoking seminar on AI and ethics.",
  "Looking forward to the upcoming vacation.",
  "Celebrating a milestone at work with colleagues.",
  "Cooked a fancy dinner from scratch. Feeling accomplished!",
  "Reflecting on life's journey and setting new goals.",
  "Enjoying quality time with family and creating lasting memories.",
  "Just finished reading a thought-provoking book. Highly recommended!",
  "Visited an art gallery and got inspired by the creativity.",
  "Trying out a new hobby - painting!",
  "Feeling grateful for the little things in life.",
  "Attended an amazing live concert last night.",
  "Chasing dreams and embracing new challenges.",
  "New puppy just got here!",
  "Sometimes we all just need a break.",
  "I need another chance at that par 4 from this morning.",
  "Have you ever been more embarassed than I was at the salon today?!",
  "To Kill a Mockingbird really speaks volumes.",
  "It's 5:00 somewhere!!",
];

const reactions = [
  "This is so you!",
  "I couldn't agree more.",
  "I'm with you on this!",
  "This is gold!",
  "You've got a point.",
  "Absolutely!",
  "Well said!",
  "Can relate to this.",
  "Tell us more!",
  "Inspiring words.",
  "Great perspective.",
  "Keep them coming!",
  "You nailed it!",
  "Love your insight!",
  "Couldn't have said it better myself.",
  "This made me think.",
  "Thanks for sharing your thoughts.",
  "Impressive.",
  "You have a gift with words.",
  "I needed this reminder today.",
  "Powerful message.",
  "Your words resonate with me.",
  "You always put things into words perfectly.",
  "Your thoughts are on point.",
  "Brilliantly expressed!",
  "You have got a way with words.",
  "You speak the truth.",
  "Your perspective is refreshing.",
  "You have a talent for conveying ideas.",
  "This resonates deeply with me.",
  "You have captured the essence beautifully.",
  "Incredible insight!",
  "Your words are impactful.",
  "Such profound wisdom!",
  "You are a master of expression.",
  "Your words bring clarity.",
  "Spot-on analysis.",
  "Your insights are thought-provoking.",
  "You have hit the mark!",
  "Your words are truly inspiring.",
  "You have given me a new perspective.",
  "Your wisdom shines through.",
];

const getRandomIndex = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomThought = () => {
  return getRandomIndex(thoughts);
};

const getRandomReaction = () => {
  return getRandomIndex(reactions);
};

const getRandomUser = () => {
  return getRandomIndex(usernames);
};

module.exports = {
  usernames,
  emails,
  getRandomThought,
  getRandomReaction,
  getRandomUser,
};
