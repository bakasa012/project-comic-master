import { Layout } from 'antd';
import React from 'react';
import BannerComponent from './banner.layout';
import NavbarComponent from './Navbar';
import { Outlet } from 'react-router-dom';
import './css.layout/style.css';

const { Content, Footer } = Layout;
const ProjectComicLayout = () => {
  return (
    <Layout>
      <NavbarComponent uList={['ABOUT', 'PROJECTS', 'ELEMENTS', 'CONTACT']} checkDefault={0} />
      <BannerComponent />
      <Content style={{ minHeight: '90vh', margin: '55px 16px 0 16px' }}>
        <Outlet />
      </Content>
      {/* <div style={{ height: '100vh' }}></div> */}
      <Footer></Footer>
    </Layout>
  );
};

export default ProjectComicLayout;
