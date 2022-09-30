import { Layout } from 'antd';
import React from 'react';
import NavbarComponent from './Navbar';

const ProjectComicLayout = () => {
  return (
    <Layout>
      <NavbarComponent uList={['ABOUT', 'PROJECTS', 'ELEMENTS', 'CONTACT']} checkDefault={0} />
    </Layout>
  );
};

export default ProjectComicLayout;
