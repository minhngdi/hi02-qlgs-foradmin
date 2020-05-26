import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './style.css';

const { Header, Content, Footer } = Layout;

const PageHeader = (props) => {
    return (
        <Layout>
            <Header className="nav-title" >
                    <h1 style={{color: 'white'}}>HI02_Quản lý giám sát</h1>
            </Header>
        </Layout>
    )

}

export default PageHeader