import React from 'react';
import avatar1 from '../images/avatar-1.jpg';
import avatar2 from '../images/avatar-2.jpg';

const Stories = () => {
  return (
    <section className="section-stories">
      <h2 className="heading-secondary margin-XL">What others have to say</h2>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__image" src={avatar1} alt="" />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary margin-S">
              Those photos are incredible!!!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              consequuntur! Officia error dolore impedit temporibus repellendus
              cumque maxime tempore sequi aliquam, voluptatum id possimus itaque
              asperiores, assumenda harum ipsum inventore blanditiis ratione
              officiis magnam perspiciatis sint animi quam. Quisquam veniam, rem
              quasi, nisi, at ea similique dicta explicabo voluptas quod illum
              asperiores consequuntur dolore necessitatibus sunt tempora dolorum
              ratione?
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <img className="story__image" src={avatar2} alt="" />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary margin-S">
              Wow. The quality and service times was fenomenal.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              consequuntur! Officia error dolore impedit temporibus repellendus
              cumque maxime tempore sequi aliquam, voluptatum id possimus itaque
              asperiores, assumenda harum ipsum inventore blanditiis ratione
              officiis magnam perspiciatis sint animi quam. Quisquam veniam, rem
              quasi, nisi, at ea similique dicta explicabo voluptas quod illum
              asperiores consequuntur dolore necessitatibus sunt tempora dolorum
              ratione?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
