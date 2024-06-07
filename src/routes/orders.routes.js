const { Router } = require("express");
const OrdersCtrl = require("../controllers/orders.controller");

const router = Router();

// GET
router.get("/", OrdersCtrl.getOrderss);
// POST
router.post("/", OrdersCtrl.createOrders);
// GET
router.get("/:id", OrdersCtrl.getOrders);
// PUT
router.put("/:id", OrdersCtrl.editOrders);
// DELETE
router.delete("/:id", OrdersCtrl.deleteOrders);

module.exports = router;
