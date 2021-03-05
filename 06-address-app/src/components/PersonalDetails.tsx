import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { IPersonState } from '../State';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
interface Iprops {
  DefaultState: IPersonState
}
export default class PersonalDetails extends React.Component<Iprops, IPersonState> {
  private defaultState: Readonly<IPersonState>
  constructor(props: Iprops) {
    super(props)
    this.defaultState = props.DefaultState;
    this.state = props.DefaultState;
  }
  private updateBinding = (event:any) => {
    switch (event.target.id) {
      case `firstName`:
        this.setState({FirstName: event.target.value});
        break;
      case `lastName`:
        this.setState({LastName: event.target.value});
        break
    }
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <input type="text" id="first" className="first" value = {this.state.FirstName} placeholder="first"/>
        </Col>
        <Col span={16}>
          <div className="personal-title">Personal details</div>
          <Row>
            <Col span={12} offset={6}>
              <Form
                {...layout}
                layout="vertical"
                name="basic"
              >
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="FirstName"
                      name="firstname"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="LastName"
                      name="lastname"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Address line 1"
                  name="Address1"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Address line 2"
                  name="address2"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Town"
                  name="town"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="FirstName"
                  name="firstname"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="country"
                  name="country"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="ZipCode"
                      name="zipcode"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Phone"
                      name="phone"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>

          </Row>

        </Col>
        <Col span={8}>
          peter smith  edit  delete  load newperson
        </Col>
      </Row>
    );
  }
}
