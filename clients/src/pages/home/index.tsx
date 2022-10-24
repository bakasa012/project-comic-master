import { Layout, Row, Space } from 'antd';
import React from 'react';
import CardComponent from '../../components/Card.component';

const HomePageComponent = () => {
  const reactId = React.useId();

  return (
    <Layout className="container">
      <Row>
        {/* <Space> */}
        {new Array(10).fill(null).map((_, index) => (
          <CardComponent key={'CardComponent' + index} />
        ))}
        {/* </Space> */}
      </Row>
    </Layout>
  );
};

export default HomePageComponent;
