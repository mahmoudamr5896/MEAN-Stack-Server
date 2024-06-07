const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI,{
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // socketTimeoutMS: 3000
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("DB Connected", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
