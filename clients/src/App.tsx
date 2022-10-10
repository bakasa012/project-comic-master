import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
// import ConfigProviderComponent from './andt.configs/ConfigProvider.component.config';
// import { Layout } from 'antd';
// import Home from './layouts/demos/Home';
// import ProjectComic from './layouts/project-commic';
// import ProjectComicLayout from './layouts/project-comic.layouts';
import LoginComponent from './pages/logins';
function App() {
  return (
    // <>
    //   <ProjectComicLayout />
    //   <ProjectComic />
    // </>
    <>
      <LoginComponent />
    </>
  );
}

export default App;
