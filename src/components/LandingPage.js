import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="home">
    <div className="home__wrapper">
      <div className="home__wrapper__top-div">
        <div className="centered-text">
          <p>We are here to help you</p>
          <p>Create a ticket for any issue you have</p>
        </div>
        <Link to="/" className="donate">
          CREATE A TICKET
        </Link>
      </div>
      <div className="home__wrapper__bottom-div">
        <div className="wrapper">
          <div className="numbers">
            <p>9000</p>
            <span>AGENTS</span>
          </div>
          <div className="numbers">
            <p>280000</p>
            <span>TICKED RESOLVED</span>
          </div>
          <div className="numbers">
            <p>7mins</p>
            <span>AVERAGE TIME</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
