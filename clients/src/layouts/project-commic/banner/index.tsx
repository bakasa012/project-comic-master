import React from 'react';
import './banner.scss';
const BannerComponent = () => {
  return (
    <div className="container">
      <h1 className="title" style={{ fontFamily: 'megaton' }}>
        Megateam
      </h1>
      <h1 className="title title-large" style={{ fontFamily: 'megaton' }}>
        Megateam
      </h1>
      <div id="img-1" className="img-container">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/lol.jpg'} />
      </div>

      <div className="img-container second-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/csgo.jpg'} />
      </div>

      <div className="img-container third-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/dota.jpg'} />
      </div>

      <div className="img-container fourth-animation">
        <img alt="by Megateam" className="img nba" src={process.env.PUBLIC_URL + '/images/batket-ball.jpg'} />
      </div>

      <div className="img-container fifth-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/fortnite.jpg'} />
      </div>

      <div id="img-6" className="img-container sixth-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/overwatch.png'} />
      </div>

      <div id="img-7" className="img-container seventh-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/nfp.jpg'} />
      </div>
    </div>
  );
};

export default BannerComponent;
