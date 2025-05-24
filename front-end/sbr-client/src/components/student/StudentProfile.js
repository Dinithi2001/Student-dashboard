import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileImage from '../student/profile.jpg';
import NavBar from '../common/NavBar';

const StudentProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8075/students/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavBar />
      
      <div className="container-fluid flex-grow-1 py-4">
        <div className="row justify-content-between">
          {/* Left Side - Profile Card */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4 d-flex flex-column">
                <img
                  src={ProfileImage}
                  alt="avatar"
                  className="rounded-circle img-fluid mx-auto mb-3"
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    objectFit: 'cover',
                    border: '3px solid #0d6efd'
                  }}
                />
                <h3 className="mb-3">
                  {student.firstName} {student.lastName}
                </h3>
                <div className="d-flex justify-content-center gap-3 mb-3">
                  <button 
                    type="button" 
                    className="btn btn-outline-primary px-4"
                    style={{ borderRadius: '20px' }}
                  >
                    <i className="bi bi-telephone me-2"></i>Call
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-primary px-4"
                    style={{ borderRadius: '20px' }}
                  >
                    <i className="bi bi-chat-left-text me-2"></i>Message
                  </button>
                </div>
                <div className="mt-auto">
                  <button
                    className="btn btn-outline-warning w-100 py-2"
                    onClick={() => navigate('/view-students')}
                    style={{ fontSize: '1.1rem' }}
                  >
                    <i className="bi bi-arrow-left me-2"></i>Back to Students List
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Details Card */}
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h4 className="mb-4 border-bottom pb-2">Student Details</h4>
                
                <div className="row mb-3">
                  <div className="col-md-4">
                    <h6 className="text-muted">First Name</h6>
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5">{student.firstName}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <h6 className="text-muted">Last Name</h6>
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5">{student.lastName}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <h6 className="text-muted">Email</h6>
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5 text-break">{student.email}</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <h6 className="text-muted">Department</h6>
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5">{student.department}</p>
                  </div>
                </div>

                {/* Additional space for more fields if needed */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <h6 className="text-muted">Student ID</h6>
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5">{id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;