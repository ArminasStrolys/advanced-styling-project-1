import React from 'react';
import PriceCard from './priceCard/PriceCard';

const data = [
  {
    heading: 'Polaroid experience',
    plan: 'Basic',
    people: 'Up to 2 people.',
    quantity: 15,
    quality: 'FHD (1080px x 1920px)',
    included: 'not included',
    days: '2',
    price: 40,
    movie: 'not included',
  },
  {
    heading: 'Picture experience',
    plan: 'Plus',
    people: 'Up to 5 people.',
    quantity: 50,
    quality: 'UHD 4K (3840px x 2160px)',
    included: 'included',
    days: '4',
    price: 99,
    movie: 'not included',
  },
  {
    heading: 'Photoshoot experience',
    plan: 'Premium',
    people: '10+ people.',
    quantity: 150,
    quality: 'Ultra (6000px x 4000px)',
    included: 'included',
    days: '5 to 15',
    price: 300,
    movie: 'included',
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
            cardNum={index + 1}
            heading={e.heading}
            plan={e.plan}
            people={e.people}
            quantity={e.quantity}
            quality={e.quality}
            included={e.included}
            days={e.days}
            movie={e.movie}
            price={e.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
