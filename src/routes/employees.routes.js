const { Router } = require("express");
const employeeCtrl = require("../controllers/employees.controller");

const router = Router();

// GET
router.get("/", employeeCtrl.getEmployees);
// POST
router.post("/", employeeCtrl.createEmployee);
// GET
router.get("/:id", employeeCtrl.getEmployee);
// PUT
router.put("/:id", employeeCtrl.editEmployee);
// DELETE
router.delete("/:id", employeeCtrl.deleteEmployee);

module.exports = router;
