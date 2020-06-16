import React from "react";
import loginImg from "../../img/login.png"
import "./style.scss"

class Register extends React.Component {
    render() {
        return (
         <div className="base-container">
            <div className="header">Đăng ký</div>
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
                        <label htmlFor="email">Địa chỉ E-mail</label>
                        <input type="email" name="email" placeholder="nhập địa chỉ e-mail..."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" placeholder="nhập mật khẩu..."></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Đăng ký
                </button>
            </div>
        </div>
        )
    }
}

export default Register