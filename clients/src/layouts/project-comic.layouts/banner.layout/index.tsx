import React from 'react';
import BackgroundBannerBomponent from './components/Background.banner.component';
import SideDropDownBannerComponent from './components/SideDropDown.banner.component';
import './css/banner.scss';
const BannerComponent = () => {
  return (
    <div className="container-banner">
      <BackgroundBannerBomponent />
      <SideDropDownBannerComponent />
    </div>
  );
};

export default BannerComponent;
