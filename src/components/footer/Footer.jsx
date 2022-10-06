import React from 'react';
import logo from '../images/logo.jpg';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={logo} alt="" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Career
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Web built by{' '}
              <a href="#" className="footer__link">
                Arminas Strolys.{' '}
              </a>
              Copyright &copy; 2022.
            </p>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
