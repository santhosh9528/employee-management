import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ViewEmployee.css';
import '../App.css';


const ViewEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        employeeID: '',
        department: '',
        designation: '',
        project: '',
        type: '',
        status: '',
    });

    const { id } = useParams(); // Assuming 'id' is passed via the URL params

    useEffect(() => {
        // Fetch employee data by ID
        axios.get(`http://localhost:5000/api/employees/${id}`)
            .then(response => setEmployee(response.data))
            .catch(err => console.log(err));
    }, [id]);

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
                <h1>View Employee</h1>

                <div className="employee-details">
                    <div className="personal-info-section" style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/100" alt="Employee Profile" />
                        </div>
                        <div className="info-group">
                            <label>Name:</label>
                            <p>{employee.name}</p>
                        </div>
                      
                        <div className="info-group">
                            <label>Employee ID:</label>
                            <p>{employee.employeeID}</p>
                        </div>
                    </div>

                    <div className="details-section">
                        <div className="info-group">
                            <label>Department:</label>
                            <p>{employee.department}</p>
                        </div>
                        <div className="info-group">
                            <label>Designation:</label>
                            <p>{employee.designation}</p>
                        </div>
                        <div className="info-group">
                            <label>Project:</label>
                            <p>{employee.project}</p>
                        </div>
                        <div className="info-group">
                            <label>Type:</label>
                            <p>{employee.type}</p>
                        </div>
                        <div className="info-group">
                            <label>Status:</label>
                            <p>{employee.status}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewEmployee;
