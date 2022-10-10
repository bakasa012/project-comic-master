import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const LoginComponent: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic_form"
      className="form-antd-custom"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ padding: 15 }}
      requiredMark={false}
      colon={false}
    >
      <Form.Item
        label="Username"
        name="username"
        className="username-label-antd"
        rules={[
          { required: true, message: 'Please input your username!' },
          { max: 20, message: "Can't enter more than 20 characters" },
        ]}
      >
        <Input className="username-input-antd" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="password-label-antd"
        rules={[
          { required: true, message: 'Please input your password!' },
          { max: 20, message: "Can't enter more than 20 characters" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 20 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit" className="btn-submit-antd-custom">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
