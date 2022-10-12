import { Button, Card, Col, Form, Input, Layout, Row, Typography } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import React from 'react';
import './css/login.scss';

const { Title } = Typography;
const LoginComponent: React.FC = () => {
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Layout>
      <Row justify="center" align="middle" style={{ height: '100vh', width: '100%' }}>
        <Col lg={{ span: 4 }}>
          <Card style={{ width: '100%' }}>
            <Title level={5} style={{ justifyContent: 'center', width: '100%', display: 'inline-flex' }}>
              Login
            </Title>

            <Form style={{ padding: '0 10px' }}>
              <Form.Item style={{ paddingTop: 30 }}>
                <Input
                  className="input-custom-antd"
                  placeholder="Username"
                  size="large"
                  prefix={<UserOutlined style={{ color: 'rgb(233, 234, 236)' }} />}
                />
              </Form.Item>

              <Form.Item>
                <Input.Password
                  className="input-custom-antd"
                  visibilityToggle={false}
                  // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  prefix={<UnlockOutlined style={{ color: 'rgb(233, 234, 236)' }} />}
                  size="large"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item style={{ paddingTop: 30 }}>
                <Button
                  className="btn-custom-antd"
                  shape="round"
                  type="primary"
                  block
                  style={{ backgroundColor: 'rgb(127, 145, 181)', borderColor: 'rgb(127, 145, 181)' }}
                  size="large"
                >
                  Login
                </Button>
              </Form.Item>
              <Form.Item style={{ marginBottom: 6 }}>
                <Button className="btn-custom-antd" type="primary" ghost block shape="round" size="large">
                  Facebook
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  className="btn-custom-antd"
                  type="primary"
                  ghost
                  block
                  shape="round"
                  style={{ color: 'rgb(164, 117, 126)', borderColor: 'rgb(164, 117, 126)', border: '2px solid' }}
                  size="large"
                >
                  Google
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default LoginComponent;
