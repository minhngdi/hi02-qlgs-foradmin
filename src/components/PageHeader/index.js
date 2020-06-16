import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Modal } from 'antd';
import { Link } from "react-router-dom";
import './style.css';
import {
    BuildOutlined,
    AlertOutlined,
    RedditOutlined,
    AuditOutlined,
    UserOutlined
} from "@ant-design/icons";
import SearchOnNav from '../SearchOnNav';
import loginImg from "../../img/login.png";
import RegisterPage from '../../containers/RegisterPage';

const { Header } = Layout;
const { SubMenu } = Menu;

class PageHeader extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo">
                        <p style={{ color: 'white' }}>Quản lý mạng lưới điện</p>
                    </div>
                    <Menu theme="dark" mode="horizontal" SelectedKeys={['2']}>
                        <SubMenu key="sub0" icon={<BuildOutlined />} title="GS thi công">
                            <Menu.Item key="21" activeClassName="showAlert">
                                <a href="https://hi01-efd.web.app/"> Danh sách công trình</a>
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
                        <Menu.Item className="avatar">
                            {/* <Dropdown overlay={menu}> */}
                            <Dropdown overlay={
                                <Menu>
                                    <Menu.Item onClick={this.showModal}>
                                            Đăng nhập
                                    </Menu.Item>
                                    <Menu.Item onClick={confirm}>
                                            Đăng ký
                                    </Menu.Item>
                                </Menu>
                            }>
                                <div>
                                    <Avatar shape="square" size={40} icon={<UserOutlined />} />
                                    <Modal
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                        cancelButtonProps={{ style: { display: 'none' } }}
                                        okButtonProps={{ style: { display: 'none' } }}
                                    >
                                        <div className="base-container" >
                                            <div className="header">Đăng nhập</div>
                                            <div className="content">
                                                <div className="image">
                                                    <img src={loginImg} alt="" />
                                                </div>
                                                <div className="form">
                                                    <div className="form-group">
                                                        <label htmlFor="username">Tài khoản</label>
                                                        <input type="text" name="username" placeholder="nhập tài khoản..."></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">Mật khẩu</label>
                                                        <input type="password" name="password" placeholder="nhập mật khẩu..."></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <button type="button" className="btn">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item key="ab" className="searchbox">
                            <SearchOnNav />
                        </Menu.Item>

                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default PageHeader

function confirm() {
    Modal.confirm({
        content: (
            <div>
                <RegisterPage />
            </div>
        ),
        cancelButtonProps: { style: { display: 'none' } },
        okButtonProps: { style: { display: 'none' } },
    });
}