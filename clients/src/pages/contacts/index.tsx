import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import MessageCustomComponent, { MessageType } from '../../components/Messages.component/MessageCustom.component';
import './css/contact.scss';
const { Title } = Typography;
const ContactComponent = () => {
  return (
    <Layout className="container" style={{ paddingTop: 15, backgroundColor: 'rgb(255, 255, 255)' }}>
      <>
        <Title style={{ margin: 0 }}>Fill the form.</Title>
        <Title style={{ margin: 0 }}>It's easy.</Title>
      </>

      <Row style={{ paddingTop: 30 }}>
        <Col span={12} style={{ backgroundColor: 'transparent' }}>
          <Form name="contact-form-ant">
            <Row style={{ paddingBottom: 15 }} justify="space-between">
              <Col lg={{ span: 11 }} md={{ span: 24 }}>
                <Form.Item name="firstName" rules={[{ max: 20, message: "Can't enter more than 20 characters" }]}>
                  <Input className="contact-input-custom-antd" maxLength={21} placeholder="First name" size="large" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 11, offset: 2 }} md={{ span: 24 }}>
                <Form.Item name="lastName" rules={[{ max: 20, message: "Can't enter more than 20 characters" }]}>
                  <Input className="contact-input-custom-antd" maxLength={21} placeholder="Last name" size="large" />
                </Form.Item>
              </Col>
            </Row>
            {/* <Row style={{ paddingBottom: 15 }}> */}
            <Form.Item name="email" rules={[{ max: 50, message: "Can't enter more than 50 characters" }]}>
              <Input className="contact-input-custom-antd" maxLength={51} placeholder="Email" size="large" />
            </Form.Item>
            {/* </Row> */}
            <Form.Item name="infoNote" rules={[{ max: 200, message: "Can't enter more than 100 characters" }]}>
              <Input.TextArea
                className="contact-input-custom-antd"
                maxLength={201}
                style={{ maxHeight: 120 }}
                placeholder="Write your message"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                onClick={() =>
                  MessageCustomComponent({
                    className: 'message-custom-antd',
                    content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    type: MessageType.success,
                    duration: 100000,
                  })
                }
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} style={{ backgroundColor: 'green' }}>
          bbbbb
        </Col>
      </Row>
    </Layout>
  );
};

export default ContactComponent;
