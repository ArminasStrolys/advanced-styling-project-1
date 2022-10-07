import React from 'react';
import img1 from '../images/img-book-1.jpg';
import img2 from '../images/img-book-2.jpg';

const PopUp = () => {
  return (
    <div>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={img2} alt="Dark hole" className="popup__image" />
            <img src={img1} alt="Flying particles" className="popup__image" />
          </div>
          <div className="popup__right">
            <a href="#service-prices" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Start booking now!</h2>
            <h3 className="heading-tertiary">
              Important &ndash; Please read these terms before booking.
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              quos similique illum debitis, mollitia culpa voluptate consequatur
              commodi, nulla, obcaecati exercitationem? Repudiandae pariatur
              molestiae culpa quos! Consequatur facilis laboriosam fuga rem
              dolor repellendus quisquam aspernatur beatae, distinctio harum
              amet aliquid ipsum consequuntur maxime, at odit vero officiis
              iure. Architecto maxime numquam distinctio voluptatum nihil
              consequatur quae voluptates sapiente, eius quaerat!
            </p>
            <a href="" className="btn btn--orange">
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
