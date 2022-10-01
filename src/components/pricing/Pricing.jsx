import React from 'react';
import PriceCard from './priceCard/PriceCard';

const data = [
  {
    heading: 'Polaroid experience',
    text: 'this is sample text',
    plan: 'Basic',
    price: 40,
  },
  {
    heading: 'Picture experience',
    text: 'this is sample text',
    plan: 'Plus',
    price: 99,
  },
  {
    heading: 'Photoshoot experience',
    text: 'this is sample text',
    plan: 'Premium',
    price: 300,
  },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="heading-secondary margin-XL">Service packages</h2>
      <div className="row">
        {data.map((e, index) => (
          <PriceCard
            key={index}
            info={e.text}
            plan={e.plan}
            heading={e.heading}
            price={e.price}
            cardNum={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
