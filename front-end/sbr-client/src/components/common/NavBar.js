import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <Container fluid>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-user-graduate me-2"></i>
          <span className="fw-bold">Student Dashboard</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link d-flex align-items-center py-3 px-3" 
                to="/view-students"
                activeclassname="active"
              >
                <i className="fas fa-users me-2"></i>
                View Students
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link d-flex align-items-center py-3 px-3" 
                to="/add-students"
                activeclassname="active"
              >
                <i className="fas fa-user-plus me-2"></i>
                Add Student
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;