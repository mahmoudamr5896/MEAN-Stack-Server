const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
const PORT = process.env.PORT || 3000;

module.exports = {
  MONGODB_URI,
  PORT,
};
