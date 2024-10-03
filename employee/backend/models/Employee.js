const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeID: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    project: { type: String },
    type: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
