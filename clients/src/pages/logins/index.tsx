import { Button, Card, Col, Form, Input, Layout, Row, Typography } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import React from 'react';
import './css/login.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../contexts/auth.context/Auth.context';

const { Title, Text } = Typography;
const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/';

  const onFinish = (values: { username: string; password: string }) => {
    console.log('Success:', values, from);
    auth.signin(values.username, () => {
      navigate(from, { replace: true });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="login-layout-custom-ant">
      <Row justify="center" align="middle" style={{ height: '100vh', width: '100%' }}>
        <Col xl={{ span: 5 }} span={24}>
          <Card className="login-card-custom-antd" style={{ width: '100%' }}>
            <Title level={3} style={{ justifyContent: 'center', width: '100%', display: 'inline-flex' }}>
              Login
            </Title>

            <Form
              style={{ padding: '0 10px' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              requiredMark={false}
              colon={false}
              name="login_form_antd"
            >
              <Form.Item
                style={{ paddingTop: 30 }}
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                  { max: 20, message: "Can't enter more than 20 characters" },
                ]}
              >
                <Input
                  className="login-input-custom-antd"
                  placeholder="Username"
                  size="large"
                  prefix={<UserOutlined />}
                  maxLength={21}
                />
              </Form.Item>

              <Form.Item name="password">
                <Input.Password
                  className="login-input-custom-antd"
                  visibilityToggle={false}
                  prefix={<UnlockOutlined />}
                  size="large"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item style={{ paddingTop: 30 }}>
                <Button
                  className="login-btn-custom-antd"
                  shape="round"
                  type="primary"
                  block
                  style={{ backgroundColor: 'rgb(64, 169, 255)', borderColor: 'rgb(127, 145, 181)' }}
                  size="large"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
              <Form.Item>
                <Text style={{ justifyContent: 'center', width: '100%', display: 'inline-flex' }}>
                  - Or Sign in with -
                </Text>
              </Form.Item>
              <Form.Item style={{ marginBottom: 6 }}>
                <Button className="login-btn-custom-antd" type="primary" ghost block shape="round" size="large">
                  Facebook
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  className="login-btn-custom-antd"
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
