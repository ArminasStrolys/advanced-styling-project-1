import React from 'react';
import icon1 from '../images/icons/lr.svg';
import icon2 from '../images/icons/ps.svg';
import icon3 from '../images/icons/family.svg';
import icon4 from '../images/icons/movie.svg';
import Service from './service/Service';

const icons = [icon1, icon2, icon3, icon4];

const Services = () => {
  return (
    <section className="services">
      <div className="row">
        {icons.map((e, index) => (
          <Service key={index} icon={e} nums={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Services;
