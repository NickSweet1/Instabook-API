const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27012/socialmediaDB";

connect(connectionString);

module.exports = connection;
