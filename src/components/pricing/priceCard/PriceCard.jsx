import React from 'react';

const PriceCard = (props) => {
  return (
    <div className="col-1-of-3">
      <div className={`card card--${props.cardNum}`}>
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${props.cardNum}`}>
            &nbsp;
          </div>
          <h4 className={`card__heading card__heading--${props.cardNum}`}>
            <span className="card__heading-span">{props.heading}</span>
          </h4>
          <div className="card__details">
            <p>Plan: {props.plan}</p>

            <p>{props.people}</p>
            <p>Photo quantity: {props.quantity}.</p>
            <p>{props.quality} photo quality.</p>
            <p>RAW photo files {props.included}.</p>
            <p>Up to {props.days} days for final results.</p>
          </div>
        </div>
        <div className="card__side card__side--back">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{props.price}€</p>
            </div>
            <a href="#" className="btn btn--primary">
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
