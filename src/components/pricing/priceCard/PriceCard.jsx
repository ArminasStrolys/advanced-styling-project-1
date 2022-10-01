import React from 'react';

const PriceCard = (props) => {
  return (
    <div>
      <p>Plan</p>
      <p>{props.info}</p>
      <p>Plan: {props.plan}</p>
    </div>
  );
};

export default PriceCard;
