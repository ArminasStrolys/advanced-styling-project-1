import React from 'react';
import photo1 from '../images/comp-photo-1.jpg';
import photo2 from '../images/comp-photo-2.jpg';
import photo3 from '../images/comp-photo-3.jpg';
// Photos cut at 1000x800 px

const Intro = () => {
  return (
    <main>
      <section className="intro" id="intro">
        <h2 className="heading-secondary margin-XL">
          Photo and editing skills
        </h2>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary margin-S">
              Photography - a different perspective
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              debitis esse mollitia, perferendis repellat explicabo, quibusdam
              illum maxime magni laborum tempore rerum non veritatis ipsum
              quidem alias incidunt eligendi saepe!
            </p>
            <h3 className="heading-tertiary margin-S">
              Lightroom - true colors come to life
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              debitis esse mollitia, perferendis repellat explicabo, quibusdam
              illum maxime magni laborum tempore rerum non veritatis ipsum
              quidem alias incidunt eligendi saepe!
            </p>
            <h3 className="heading-tertiary margin-S">
              Photoshop - manipulate inperfect details
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              debitis esse mollitia, perferendis repellat explicabo, quibusdam
              illum maxime magni laborum tempore rerum non veritatis ipsum
              quidem alias incidunt eligendi saepe!
            </p>
            <a href="#" className="btn-text">
              More &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={photo1}
                alt="Gallery preview 1 of 3"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={photo2}
                alt="Gallery preview 2 of 3"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={photo3}
                alt="Gallery preview 3 of 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Intro;
