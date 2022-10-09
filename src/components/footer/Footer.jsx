import React from 'react';
import logo from '../images/logo.jpg';
import logo_small from '../images/logo-small.jpg';
import logo2x from '../images/logo-low.jpg';

const Footer = () => {
  return (
    <>
      <footer style={{ marginBottom: '-2rem' }} className="footer">
        <div className="footer__logo-box">
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="logo of the company"
            className="footer__logo"
          />
        </div>

        {/* <picture className="footer_logo">
          <source
            srcSet={`${logo_small} 1x, ${logo} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="logo of the company"
            className="footer__logo"
          />
        </picture> */}

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
                  <a href="#" className="footer__link">
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
          <div style={{ marginBottom: '0' }} className="col-1-of-2">
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
