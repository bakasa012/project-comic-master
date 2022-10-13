import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
// import { Layout } from 'antd';
// import Home from './layouts/demos/Home';
import AuthProvider from './contexts/auth.context/Auth.provider';
import { Routes, Route } from 'react-router-dom';
import routers from './routers';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {routers.map((router, index: number) => (
          <Route key={index} path={router.path} element={router.component}>
            {router.routers &&
              router.routers.map((item, indexItem) => (
                <Route
                  key={item?.path || 'main' + indexItem}
                  path={item?.path}
                  index={item?.index}
                  element={item.component}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </AuthProvider>
  );
}

export default App;
