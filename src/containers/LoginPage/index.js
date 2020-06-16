import React from "react";
import { Layout } from 'antd';
import loginImg from "../../img/login.png";
import './style.scss';
import PageHeader from '../../components/PageHeader';

class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <Layout>
                    <PageHeader />
                </Layout>
                <div className="base-container" >
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            Login
                </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage