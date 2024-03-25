const employeeCtrl = {};
const Employee = require("../models/Employee");

// GET
employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
// POST
employeeCtrl.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.send({ message: "New Employee Created" });
};
// GET
employeeCtrl.getEmployee = async (req, res) => {
  console.log(req.params);
  const employee = await Employee.findById(req.params.id);
  res.send(employee);
};
// PUT
employeeCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({status: 'Employee Updated'})
};
// DELETE
employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ status: "Employee Deleted" });
};

module.exports = employeeCtrl;
