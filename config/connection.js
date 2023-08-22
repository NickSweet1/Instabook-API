const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGO_URI || "mongodb://localhost:27017/socialmediaDB";

connection.on("connected", () => {
  console.log("Connected to MongoDB successfully!");
});

connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

connect(connectionString);

module.exports = connection;
