import React, { Component, useState, useEffect }  from 'react';
import { Form, Input, Button, Checkbox, InputNumber, Divider, Radio, Select } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';

import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar'; 
import { Layout } from 'antd';
import './style.css';

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


const CreateWarning = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  const onFinish = values => {  
    console.log(values);
  };


  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <div >                
      <PageHeader />
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
        <Content>
            <Row align={'middle'} className="SecName">
              <Col span={24}>
                <h1>Tạo đợt kiểm tra mới</h1>
              </Col>
            </Row>
            <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Row gutter={24}>
                <Divider>Những thông tin chính</Divider>
                <Col span={16} offset={4}>
                  <Row gutter={24}>

                    <Col span={16}>
                    <Form.Item name={['warning', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                    </Col>
                    <Col span={8}>
                    <Form.Item name={['user', 'age']} label="Mức độ" rules={[{ required: true }]}>
                      <Select defaultValue="normal" >
                        <Option value="Critical">Nghiêm trọng</Option>                
                        <Option value="high">Cao</Option>
                        <Option value="normal">Trung bình</Option>
                        <Option value="low" >Thấp</Option>
                      </Select>           
                    </Form.Item>
                    </Col>

                    <Col span={6}>
                    <Form.Item name={['user', 'website']} label="Ngày kiểm tra" rules={[{ required: true }]}>
                      <DatePicker defaultValue={moment('2012/11/16', dateFormat)} format={dateFormat} />
                    </Form.Item>
                    </Col>


                    <Col span={9}>
                    <Form.Item name={['warning', 'address']} label="Người giám sát" rules={[{ required: true }]}>
                      <Select defaultValue="normal" >
                        <Option value="Critical">Nhóm VP.infinite></Option>                
                        <Option value="high">Nhóm The Boys</Option>
                        <Option value="normal">Nhóm The Ugly</Option>
                        <Option value="low" >Nhóm mới</Option>
                      </Select>   
                    </Form.Item>
                    </Col>

                    <Col span={9}>
                    <Form.Item name={['warning', 'address']} label="Nhóm thực hiện" rules={[{ required: true }]}>
                      <Select defaultValue="normal" >
                        <Option value="Critical">Nhóm VP.infinite></Option>                
                        <Option value="high">Nhóm The Boys</Option>
                        <Option value="normal">Nhóm The Ugly</Option>
                        <Option value="low" >Nhóm mới</Option>
                      </Select> 
                    </Form.Item>
                    </Col>


                  </Row>
                </Col>
              </Row>
              <Row>
                <Divider>Một số thông tin thêm</Divider> 
                  <Col span={16} offset={4}>
                  <Row gutter={24}>

                    <Col span={6}>
                    <Form.Item name={['warning', 'address']} label="Tài liệu" rules={[{ required: true }]}  wrapperCol={{ span: 18, offset:0}}>
                      <Button>
                        <UploadOutlined /> Click to Upload
                      </Button>   
                    </Form.Item>
                    </Col>



                    <Col span={7}>
                    <Form.Item name={['user', 'website']} label="Ngày kết thúc">
                      <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </Form.Item>
                    </Col>

                    <Col span={10}>
                    <Form.Item name={['warning', 'address']} label="Đối tượng liên quan" rules={[{ required: true }]}>
                        <Select
                          mode="multiple"
                          style={{ width: '100%' }}
                          placeholder="Please select"
                          defaultValue={['a10', 'c12']}
                        >
                          {children}
                        </Select>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item name={['user', 'age']} label="Ghi chú" >
                         <TextArea rows={4} />
                    </Form.Item>
                    </Col>

                  </Row>
                </Col>
              </Row>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>

        </Content>
      </Layout>
    </div>
  );
};


export default CreateWarning  ;