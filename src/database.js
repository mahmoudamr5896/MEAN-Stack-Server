const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/employees")
  .then((db) => console.log("Db connected"))
  .catch((err) => console.error(err));
