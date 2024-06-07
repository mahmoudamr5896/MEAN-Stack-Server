// const dotenv = require("dotenv");
// dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mahmoud:123@cluster0.0qd359r.mongodb.net/loladb";
const PORT = process.env.PORT || 3001;

module.exports = {
  MONGODB_URI,
  PORT,
};
