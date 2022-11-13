import React from 'react';
import { Layout } from 'antd';
import HTMLFlipBook from 'react-pageflip';
import { Page, PageCover } from './components/page.component';

const AlbumComponent = () => {
  return (
    // @ts-ignore
    <Layout>
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={550}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        // onFlip={this.onPage}
        // onChangeOrientation={this.onChangeOrientation}
        // onChangeState={this.onChangeState}
        className="demo-book"
      // ref={(el) => (this.flipBook = el)}
      >
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={3}>Lorem ipsum...</Page>
        <Page number={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit labore ullam rem necessitatibus sed
          veniam totam. Suscipit aut ab odio beatae iusto corporis temporibus cum? Odit quis ea unde.
        </Page>
        {/* <Page number={3}>{<LoginComponent />}</Page> */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
    </Layout>
  );
};

export default AlbumComponent;
