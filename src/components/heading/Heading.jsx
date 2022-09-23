import React from 'react';
import logo from '../images/logo-minimal.png';

const Heading = () => {
  return (
    <div>
      <header className="header"></header>
      {/* LOGO SECTION */}
      {/* <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo of the site 'Arminas photography'"
        />
      </div> */}
      <div className="heading-container">
        <h1 className="heading-texts">
          <span className="heading-main">Photography</span>
          <span className="heading-sub">By Arminas Strolys</span>
        </h1>
        <a href="#" className="btn btn-main btn-animated">
          Discover
        </a>
      </div>
    </div>
  );
};

export default Heading;
