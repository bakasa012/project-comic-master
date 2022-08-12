import React from 'react';
import NavComponent from './nav';
import { Layout } from 'antd';
import BannerComponent from './banner';
import ContentComponent from './content';

const ProjectComic = () => {
  const [isMobile, SetMobile] = React.useState<boolean>(false);
  return (
    <Layout>
      <NavComponent />
      <BannerComponent />
      <ContentComponent />
    </Layout>
  );
};

export default ProjectComic;
