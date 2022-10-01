import React from 'react';

const PriceCard = (props) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <p>Plan</p>
          <p>{props.info}</p>
          <p>Plan: {props.plan}</p>
        </div>
        <div className="card__side card__side--back">
          <p>Only 99$</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
