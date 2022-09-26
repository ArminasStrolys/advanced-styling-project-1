import React from 'react';
// import logo from '../images/logo-minimal.png';

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
      <div className="header__container">
        <h1 className="header-primary">
          <span className="header-primary--main">Photography</span>
          <span className="header-primary--sub">By Arminas Strolys</span>
        </h1>
        <a href="#" className="btn btn--primary btn--animated">
          Discover
        </a>
      </div>
    </div>
  );
};

export default Heading;
