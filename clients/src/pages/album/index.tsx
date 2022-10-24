import { Layout } from 'antd';
import HTMLFlipBook from 'react-pageflip';
import React from 'react';

const AlbumComponent = () => {
  return (
    <Layout>
      <HTMLFlipBook width={300} height={500}>
        <div className="demoPage">Page 1</div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>
    </Layout>
  );
};

export default AlbumComponent;
