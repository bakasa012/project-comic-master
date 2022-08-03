import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import ConfigProviderComponent from './andt.configs/ConfigProvider.component.config';
import { Layout } from 'antd';
import Home from './layouts/demos/Home';

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    // <div className="App">
    //   <ConfigProviderComponent>
    //     <>
    //       <Layout>
    //         <Header>Header</Header>
    //         <Content style={{ height: '100vh' }}>
    //         </Content>
    //         <Footer>Footer</Footer>
    //       </Layout>
    //     </>
    //   </ConfigProviderComponent>
    // </div>
    <Home></Home>
  );
}

export default App;
