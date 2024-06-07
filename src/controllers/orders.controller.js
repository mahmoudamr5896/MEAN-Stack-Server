const OrdersCtrl = {};
const Orders = require("../models/orders");

// GET
OrdersCtrl.getOrderss = async (req, res) => {
  const Orderss = await Orders.find();
  res.json(Orderss);
};
// POST
OrdersCtrl.createOrders = async (req, res) => {
  const newOrders = new Orders(req.body);
  await newOrders.save();
  res.send({ message: "New Orders Created" });
};
// GET
OrdersCtrl.getOrders = async (req, res) => {
  console.log(req.params);
  const Orders = await Orders.findById(req.params.id);
  res.send(Orders);
};
// PUT
OrdersCtrl.editOrders = async (req, res) => {
  await Orders.findByIdAndUpdate(req.params.id, req.body);
  res.json({status: 'Orders Updated'})
};
// DELETE
OrdersCtrl.deleteOrders = async (req, res) => {
  await Orders.findByIdAndDelete(req.params.id);
  res.json({ status: "Orders Deleted" });
};

module.exports = OrdersCtrl;
