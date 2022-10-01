import React from 'react';

const PriceCard = (props) => {
  return (
    <div className="col-1-of-3">
      <div className={`card card--${props.cardNum}`}>
        <div className="card__side card__side--front">
          <div className="card__picture"></div>
          <div className="card__heading">{props.heading}</div>
          <div className="card__details"></div>
          <p>Plan</p>
          <p>{props.info}</p>
          <p>Plan: {props.plan}</p>
        </div>
        <div className="card__side card__side--back">
          <p>Only {props.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
