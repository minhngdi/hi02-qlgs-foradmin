import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import { Layout, Card, Col, Row, Select, Alert, Table, Switch, Radio, Form, Breadcrumb, Tag, Input, Divider, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const { Meta } = Card;
const { Search } = Input;


class NotiSettings extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <PageHeader />
                </Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            theme="light"
                            style={{ padding: '50px 50px' }}
                        >
                            <div>
                                <Title>Thiết lập thông báo</Title>
                                <Text type="secondary">Đây là trang giúp cho người dùng tùy chỉnh thông báo</Text>

                                <Divider />

                                <p>
                                    <Text strong>Tiếp nhận thông báo từ </Text>
                                    <Radio style={{ padding: '0 70px 0 120px' }}>Cảnh báo tạo tự động</Radio>
                                    <Radio>Cảnh báo tạo thủ công</Radio>
                                </p>

                                <Divider />

                                <p>
                                    <Text strong >Nhận thông báo bằng email </Text>
                                    <span style={{ padding: '0 130px' }}> </span>
                                    <Switch defaultChecked />
                                </p>

                                <Divider />

                                <p>
                                    <Text strong >Nhận thông báo bằng SMS </Text>
                                    <span style={{ padding: '0 133px' }}> </span>
                                    <Switch defaultChecked />
                                </p>

                                <Divider />

                                <p>
                                    <Text strong >Nhận thông báo qua màn hình desktop </Text>
                                    <span style={{ padding: '0 95px' }}> </span>
                                    <Switch defaultChecked />
                                </p>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div >

        );
    }
}

export default NotiSettings;
