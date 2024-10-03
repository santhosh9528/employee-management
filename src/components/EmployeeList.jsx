import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EmployeeList.css';
import '../App.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/employees/${id}`)
            .then(() => setEmployees(employees.filter(emp => emp._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>RS-TECH</h2>
                <ul>
                    <li><Link to="/"><i className="fas fa-home"></i> Dashboard</Link></li>
                    <li><Link to="/"><i className="fas fa-users"></i> Employee</Link></li>
                    <li><Link to="/calendar"><i className="fas fa-calendar"></i> Calendar</Link></li>
                    <li><Link to="/messages"><i className="fas fa-envelope"></i> Messages</Link></li>
                </ul>
            </div>

            {/* Main content */}
            <div className="main-content">
                <div className="search-bar">
                    <h1>Employee</h1>
                    <input type="text" placeholder="Search" />
                    <Link to="/add" className="add-btn"><i className="fas fa-plus"></i> Add New Employee</Link>
                </div>

                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Project</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp._id}>
                                <td><img src={emp.profilePicture} alt="profile" /> {emp.name}</td>
                                <td>{emp.employeeID}</td>
                                <td>{emp.department}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.project}</td>
                                <td>{emp.type}</td>
                                <td>{emp.status}</td>
                                <td>
                                    {/* <button><i className="fas fa-eye"></i></button> */}
                                    <Link to={`/view/${emp._id}`} className="edit-btn"><i className="fas fa-eye"></i></Link>
                                    <Link to={`/edit/${emp._id}`} className="edit-btn"><i className="fas fa-edit"></i></Link>
                                    <button onClick={() => handleDelete(emp._id)} className="delete"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
