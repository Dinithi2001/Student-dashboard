import React from 'react';
import logo from './assets/home.jpg';
import NavBar from './components/common/NavBar';
import { Container } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="fullscreen-container">
      <NavBar />

      <Container fluid className="p-0 position-relative">
        <div className="position-relative">
          <img
            src={logo}
            alt="Home"
            className="w-100 vh-100 object-fit-cover"
          />

          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 className="display-4 mb-4">Welcome to the home page</h1>
            <p className="lead mb-5">
              Explore our platform and discover amazing features
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
