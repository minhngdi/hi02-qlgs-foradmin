import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import './style.css';
import {
    BuildOutlined,
    AlertOutlined,
    RedditOutlined,
    AuditOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

const PageHeader = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <p style={{ color: 'white' }}>Quản lý mạng lưới điện</p>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <SubMenu key="sub0" icon={<BuildOutlined />} title="GS thi công">
                        <Menu.Item key="21" activeClassName="showAlert">
                            Danh sách công trình
                        </Menu.Item>
                        <Menu.Item key="21" activeClassName="showAlert">
                            Tạo công trình
                        </Menu.Item>
                        <Menu.Item key="21" activeClassName="showAlert">
                            Thống kê tiến độ
                        </Menu.Item>
                        <Menu.Item key="21" activeClassName="showAlert">
                            Không gian thảo luận
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" icon={<AlertOutlined />} title="GS-QL cảnh báo">
                        <Menu.Item key="3" activeClassName="showAlert">
                            <Link to={`/alert`}>
                                Hiển thị cảnh báo
                                    </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={`/dashboard`}>
                                Thống kê cảnh báo
                                    </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<RedditOutlined />} title="Drones">
                        <Menu.Item key="21" activeClassName="showAlert">
                            Tạo hành trình
                        </Menu.Item>
                        <Menu.Item key="22">
                            QL dữ liệu chuyến bay
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AuditOutlined />} title="QL sự cố - Báo cáo">
                        <Menu.Item key="31" activeClassName="showAlert">
                            Phát hiện sự cố
                        </Menu.Item>
                        <Menu.Item key="32">
                            Tạo báo cáo
                        </Menu.Item>
                        <Menu.Item key="33">
                            Xem danh sách báo cáo
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        </Layout>
    )

}

export default PageHeader