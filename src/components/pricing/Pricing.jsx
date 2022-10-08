import React from 'react';
import PriceCard from './priceCard/PriceCard';

const data = [
  {
    heading: 'Polaroid experience',
    plan: 'Basic',
    people: 'Up to 2 people.',
    quantity: 15,
    quality: 'FHD (1080 x 1920)',
    included: 'not included',
    days: '2',
    price: 39,
  },
  {
    heading: 'Picture experience',
    plan: 'Plus',
    people: 'Up to 5 people.',
    quantity: 50,
    quality: 'UHD 4K (3840 x 2160)',
    included: 'included',
    days: '4',
    price: 99,
  },
  {
    heading: 'Photoshoot experience',
    plan: 'Premium',
    people: '10+ people.',
    quantity: 150,
    quality: 'Ultra (6000 x 4000)',
    included: 'included',
    days: '5 to 15',
    price: 299,
  },
];

const Pricing = () => {
  return (
    <section className="pricing margin-XL" id="service-prices">
      <h2 className="heading-secondary margin-XL">Service packages</h2>
      <div className="row">
        {data.map((e, index) => (
          <PriceCard
            key={index}
            cardNum={index + 1}
            heading={e.heading}
            plan={e.plan}
            people={e.people}
            quantity={e.quantity}
            quality={e.quality}
            included={e.included}
            days={e.days}
            price={e.price}
          />
        ))}
      </div>
      {/* <div className="center"> */}
      <a href="#" className="btn btn--orange">
        Discover all plans
      </a>
      {/* </div> */}
    </section>
  );
};

export default Pricing;
