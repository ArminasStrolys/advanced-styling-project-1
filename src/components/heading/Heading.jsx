import React from 'react';
import logo from '../images/logo-minimal.png';

const Heading = () => {
  return (
    <div>
      <header className="header"></header>
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo of the site 'Arminas photography'"
        />
      </div>
      <h1 className="heading-container">
        <span className="heading-main">Photography</span>
        <span className="heading-sub">By Arminas Strolys</span>
      </h1>
    </div>
  );
};

export default Heading;
