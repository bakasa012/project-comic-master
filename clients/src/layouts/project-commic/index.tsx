import React from 'react';
import { Layout } from 'antd';
import BannerComponent from './banner';
// import ContentComponent from './content';
import NavComponent from './nav';
import BackTopComponent from './back-top';
// import { DetectMobileDevice } from '../../configs/detect-mobile-device/detectIsMobile';

const ProjectComic = () => {
  // const [isMobile, SetMobile] = React.useState<boolean>(false);
  return (
    <Layout>
      <NavComponent isMobile={true} />
      <BannerComponent />
      <BackTopComponent />
    </Layout>
  );
};

export default ProjectComic;
