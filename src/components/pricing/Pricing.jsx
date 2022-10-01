import React from 'react';
import PriceCard from './priceCard/PriceCard';

const data = [
  { text: 'this is sample text', plan: 'Basic', index: 15 },
  { text: 'this is sample text', plan: 'Plus', index: 15 },
  { text: 'this is sample text', plan: 'Premium', index: 15 },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="heading-secondary margin-XL">Service packages</h2>
      <div className="row">
        {data.map((e, index) => (
          <PriceCard key={index} info={e.text} plan={e.plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
