import { Layout } from 'antd';
import React from 'react';
import BannerComponent from './banner.layout';
import NavbarComponent from './Navbar';
import { Outlet } from 'react-router-dom';

const ProjectComicLayout = () => {
  return (
    <Layout>
      <NavbarComponent uList={['ABOUT', 'PROJECTS', 'ELEMENTS', 'CONTACT']} checkDefault={0} />
      <BannerComponent />
      <div style={{ height: '100vh' }}>
        <Outlet />
      </div>
    </Layout>
  );
};

export default ProjectComicLayout;
