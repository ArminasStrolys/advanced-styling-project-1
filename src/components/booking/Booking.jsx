import React from 'react';

const Booking = () => {
  return (
    <section className="section-booking">
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
