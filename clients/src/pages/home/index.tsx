import { Layout, Row } from 'antd';
import React from 'react';
import CardComponent from '../../components/Card.component';
import TableCustomComponent from '../../components/Table.component/TableCustom.component';

const HomePageComponent = () => {
  const reactId = React.useId();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <Layout className="container" key={reactId}>
      <Row style={{ width: '100%' }}>
        <TableCustomComponent columns={columns} dataSource={data} loading={false} style={{ width: '100%' }} totalRow={1000} />
      </Row>
      <Row>
        {new Array(10).fill(null).map((_, index) => (
          <CardComponent key={'CardComponent' + index} />
        ))}
      </Row>
    </Layout>
  );
};

export default HomePageComponent;
