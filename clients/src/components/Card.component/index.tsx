import { Card, Col } from 'antd';
import React from 'react';
import './css/card.scss';

const { Meta } = Card;
interface Props {
  imageSrc?: string;
}
const CardComponent: React.FC<Props> = (props: Props) => {
  return (
    <Col xl={4} lg={6} sm={6} xs={12} className="card-custom-antd">
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
};

export default CardComponent;
