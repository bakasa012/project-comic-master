import React from 'react';

const SideDropDownBannerComponent = () => {
  return (
    <>
      <div id="img-1" className="img-container-banner">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/lol.jpg'} />
      </div>

      <div className="img-container-banner second-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/csgo.jpg'} />
      </div>

      <div className="img-container-banner third-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/dota.jpg'} />
      </div>

      <div className="img-container-banner fourth-animation">
        <img alt="by Megateam" className="img nba" src={process.env.PUBLIC_URL + '/images/batket-ball.jpg'} />
      </div>

      <div className="img-container-banner fifth-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/fortnite.jpg'} />
      </div>

      <div id="img-6" className="img-container-banner sixth-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/overwatch.png'} />
      </div>

      <div id="img-7" className="img-container-banner seventh-animation">
        <img alt="by Megateam" className="img" src={process.env.PUBLIC_URL + '/images/nfp.jpg'} />
      </div>
    </>
  );
};

export default SideDropDownBannerComponent;
