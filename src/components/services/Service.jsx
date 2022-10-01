import React from 'react';

const Service = (props) => {
  return (
    <div className="col-1-of-4">
      <div className="service-box">
        <h3
          className={`heading-tertiary heading-tertiary--txt-${props.nums}`}
        ></h3>
        <img
          className={`service-box__icon icon-basic-${props.nums}`}
          src={props.icon}
          alt=""
        />
        <p className="service-box__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          provident beatae, placeat nemo asperiores delectus mollitia itaque,
          voluptatum consectetur repudiandae dolor distinctio qui, unde quo eius
          nobis tempore maxime sapiente!
        </p>
      </div>
    </div>
  );
};

export default Service;
