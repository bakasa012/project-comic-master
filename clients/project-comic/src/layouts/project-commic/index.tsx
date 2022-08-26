import React from 'react';
import { Layout } from 'antd';
import BannerComponent from './banner';
// import ContentComponent from './content';
import NavComponent from './nav';
import BackTopComponent from './back-top';
import BannerAutoPlayComponent from './banner/banner-auto-play';
import { DetectMobileDevice } from '../../configs/detect-mobile-device/detectIsMobile';

const ProjectComic = () => {
  // const [isMobile, SetMobile] = React.useState<boolean>(false);
  return (
    <Layout>
      <NavComponent isMobile={true} />
      {/* <BannerAutoPlayComponent /> */}
      {/* <BannerComponent /> */}
      {/* <ContentComponent /> */}
      <BackTopComponent />
    </Layout>
  );
};

export default ProjectComic;
