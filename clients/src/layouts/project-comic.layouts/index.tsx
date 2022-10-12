import { Layout } from 'antd';
import React from 'react';
import BannerComponent from './banner.layout';
import NavbarComponent from './Navbar';

const ProjectComicLayout = () => {
  return (
    <Layout>
      <NavbarComponent uList={['ABOUT', 'PROJECTS', 'ELEMENTS', 'CONTACT']} checkDefault={0} />
      <BannerComponent />
      <div style={{ height: '100vh' }}>aaaaaa</div>
    </Layout>
  );
};

export default ProjectComicLayout;
