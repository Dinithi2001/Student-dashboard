import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../common/NavBar';

const AddStudents = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8075/students', student);
    navigate('/view-students');
  };

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa',
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '40px 20px',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '700px',
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <NavBar />
      <div style={styles.contentWrapper}>
        <div style={styles.formContainer}>
          <h2 className="mb-4">Add Student</h2>
          <form onSubmit={updateStudent}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="department" className="form-label">Department</label>
              <input
                className="form-control"
                type="text"
                name="department"
                id="department"
                required
                value={department}
                onChange={handleInputChange}
              />
            </div>

            <div className="d-flex gap-3">
              <button className="btn btn-outline-success" type="submit">Save</button>
              <Link to="/view-students" className="btn btn-outline-warning">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;
