import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './EditEmployee.css';
import '../App.css';


const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    employeeID: '',
    department: '',
    designation: '',
    project: '',
    type: '',
    status: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then(res => setEmployee(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/employees/${id}`, employee)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>RS-TECH</h2>
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> Dashboard</Link></li>
          <li><Link to="/"><i className="fas fa-users"></i> Employee</Link></li>
          <li><Link to="/calendar"><i className="fas fa-calendar"></i> Calendar</Link></li>
          <li><Link to="/messages"><i className="fas fa-envelope"></i> Messages</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Add New Employee</h1>

        <form onSubmit={handleSubmit} className="employee-form">
          <div className="personal-info-section">
            <div className="profile-image">
              <img src="https://via.placeholder.com/100" alt="Employee Profile" />
              <i className="fas fa-camera"></i>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="employeeID">Employee ID*</label>
              <input
                type="text"
                id="employeeID"
                name="employeeID"
                value={employee.employeeID}
                onChange={handleChange}
                required
                placeholder="Enter employee ID"
              />
            </div>
          </div>

          <div className="form-group-section">
            <div className="form-group">
              <label htmlFor="department">Department*</label>
              <select
                id="department"
                name="department"
                value={employee.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="designation">Designation*</label>
              <select
                id="designation"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="project">Project</label>
              <input
                type="text"
                id="project"
                name="project"
                value={employee.project}
                onChange={handleChange}
                placeholder="Enter project"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type*</label>
              <select
                id="type"
                name="type"
                value={employee.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status*</label>
              <select
                id="status"
                name="status"
                value={employee.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={() => navigate('/')}>
              Cancel
            </button>
            <button type="submit" className="confirm-button">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
