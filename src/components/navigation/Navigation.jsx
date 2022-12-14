import React from 'react';

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#home" className="navigation__link">
                <span>01 </span>
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#intro" className="navigation__link">
                <span>02 </span>
                Intro
              </a>
            </li>
            <li className="navigation__item">
              <a href="#skills" className="navigation__link">
                <span>03 </span>
                Skills
              </a>
            </li>
            <li className="navigation__item">
              <a href="#services" className="navigation__link">
                <span>04 </span>
                Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#reviews" className="navigation__link">
                <span>05 </span>
                Reviews
              </a>
            </li>
            <li className="navigation__item">
              <a href="#booking" className="navigation__link">
                <span>06 </span>
                Book
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
