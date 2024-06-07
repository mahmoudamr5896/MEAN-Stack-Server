const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT } = require("./config");
const employeeCtrl = require("./controllers/employees.controller");
const ordersCtrl = require("./controllers/orders.controller");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mahmoud:123@cluster0.0qd359r.mongodb.net/loladb";
const port = process.env.PORT || 3001;

// app.get('/',async (req, res) => {
//     try {
//         employeeCtrl.getEmployees
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       res.status(500).json({ error: 'Failed to fetch products' });
//     }
//   }
// )

app.use("/api/products", require("./routes/employees.routes"));
app.use("/api/orders", require("./routes/orders.routes"));

module.exports = app;
