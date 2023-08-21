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
];

const getRandomIndex = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomThought = () => {
  return getRandomIndex(thoughts);
};

module.exports = { usernames, emails, getRandomThought };
