import React from 'react';

const Booking = () => {
  return (
    <section className="section-booking" id="home">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <h2 className="heading-secondary margin-M">Book now!</h2>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="E-mail"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  E-mail
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="basic"
                    name="plan"
                  />
                  <label htmlFor="basic" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Basic
                  </label>
                </div>
                {/* //----------------------------------- */}
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="plus"
                    name="plan"
                  />
                  <label htmlFor="plus" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Plus
                  </label>
                </div>
                {/* //----------------------------------- */}
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="premium"
                    name="plan"
                  />
                  <label htmlFor="premium" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Premium
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--primary">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
