const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT } = require("./config");
const employeeCtrl = require("./controllers/employees.controller");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
const port = process.env.PORT || 3001;

app.get('/',employeeCtrl.getEmployees)

app.use("/api/products", require("./routes/employees.routes"));

module.exports = app;
