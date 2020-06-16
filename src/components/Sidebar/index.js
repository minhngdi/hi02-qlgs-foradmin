import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { Layout, Menu } from "antd";
import {
    HomeOutlined,
    AlertOutlined,
    MonitorOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
    render() {
        return (
            <Layout className="layout-background" >
                <Sider className="site-layout-background">
                    <div className="logo" />
                    {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"> */}
                    <Menu mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to={`/alert`}>
                                Trang chủ
                                    </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<AlertOutlined />} title="Cảnh báo">
                            <Menu.Item key="3" activeClassName="showAlert">
                                <Link to={`/alert`}>
                                    Hiển thị cảnh báo
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="4" activeClassName="showAlert">
                                <Link to={`/redalert`}>
                                    DS khẩn cấp
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="5" activeClassName="showAlert">
                                <Link to={`/yellowalert`}>
                                    DS ưu tiên
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="6" activeClassName="showAlert">
                                <Link to={`/greenalert`}>
                                    DS ưu tiên thấp
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to={`/dashboard`}>
                                    Thống kê cảnh báo
                                    </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<MonitorOutlined />} title="Đợt kiểm tra">
                            <Menu.Item key="3" activeClassName="showAlert">
                                <Link to={`/addcheck`}>
                                    Tạo đợt kiểm tra
                                    </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={`/checklist`}>
                                    Danh sách đkt
                                    </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}

export default Sidebar