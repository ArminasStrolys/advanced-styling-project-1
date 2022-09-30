import React from 'react';

const Intro = () => {
  return (
    <main>
      <section className="intro">
        <h2 className="heading-secondary margin-XL">
          Photo and editing skills
        </h2>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary margin-S">
              Photography skills of a master
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              debitis esse mollitia, perferendis repellat explicabo, quibusdam
              illum maxime magni laborum tempore rerum non veritatis ipsum
              quidem alias incidunt eligendi saepe!
            </p>
            <h3 className="heading-tertiary margin-S">
              Lightroom to customize the shades
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              debitis esse mollitia, perferendis repellat explicabo, quibusdam
              illum maxime magni laborum tempore rerum non veritatis ipsum
              quidem alias incidunt eligendi saepe!
            </p>
            <h3 className="heading-tertiary margin-S">
              Photoshop to adjust inperfect details
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
                src=""
                alt=""
                className="composition__photo composition__photo--p1"
              />
              <img
                src=""
                alt=""
                className="composition__photo composition__photo--p1"
              />
              <img
                src=""
                alt=""
                className="composition__photo composition__photo--p1"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Intro;
