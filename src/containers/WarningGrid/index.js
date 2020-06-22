import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import SearchOnNav from '../../components/SearchOnNav';
import {Layout, Card, Col, Row, Select, Alert, Typography} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Option } = Select;
const { Meta } = Card;
const { Text, Link } = Typography;

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

const data = ['a','b'];


function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

const WarningGrid = (props) => {
    return (
        <div>
            <Layout>
                <PageHeader />
                {/* <SearchOnNav /> */}
            </Layout>
            <Layout>
                <Sider>
                    <Sidebar />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="body-mod">
                        {/* Top-Card */}
                        <div className="top-card-wrapper">
                            <Row gutter={24}>
                                <Col span={6}>
                                    <Card size="small" style={{ background: '#ff9c6e', height: 145, width: 180 }} title="Khẩn cấp" bordered={false}>
                                        <h3>4</h3>
                                        cảnh báo
                                    </Card>
                                </Col>
        
                                <Col span={6}>
                                    <Card 
                                    size="small"
                                    style={{ 
                                        background: '#fff566', 
                                        height: 150, 
                                        width: 170 }} 
                                    title="Ưu tiên" 
                                    bordered={false}
                                    >
                                        <h1>5</h1>
                                        cảnh báo
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card 
                                    size="small"
                                    style={{ background: '#2db7f5', height: 150, width: 170 }} 
                                    title="Ưu tiên thấp" bordered={false}>
                                        <h1>3</h1>
                                        cảnh báo
                                    </Card>
                                </Col>

                                <Col span={3}>
                                    <Card 
                                    style={{height: 100, width: 110 }} 
                                    bordered={false}
                                    actions={[
                                        <SettingOutlined key="setting" />]}
                                    onClick={() => window.location="/alertsettings"}
                                    >
                                        Cấu hình cảnh báo
                                    </Card>
                                </Col>

                                <Col span={3}>
                                    <Card style={{ height: 100, width: 120 }} bordered={false}
                                    actions={[
                                        <SettingOutlined key="setting" />
                                    ]}
                                    onClick={() => window.location="/notisettings"}
                                    >
                                        Cấu hình thông báo
                                    </Card>
                                </Col>  
                            </Row>
                        </div>

                        {/* Chart-Card */}



                        {/* Location-Card */}
                        <div className="site-card-wrapper">
                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://img.vtcnew.com.vn/files/f2/2014/03/19/ha-noi-ma-tran-cot-dien-bay-nguoi-di-duong-0.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Đống Đa" description="Cây đổ lên dây điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    {/* <div onClick={() => window.location="/alertdetail"}> */}
                                    <div>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Nam Từ Liêm" description="Chập điện" />
                                    </Card>
                                    </div>
                                </Col>
                                {/* <Col span={6}>
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://icdn.dantri.com.vn/OlRTd1upOguwZHvZpzsc/Image/2013/02/tru-dien-31839.jpg" />}
                                    >
                                        <Meta title="Khu vực Bắc Từ Liêm" description="Cột điện xuống cấp nặng" />
                                    </Card>
                                    </div>
                                </Col> */}
                                
                                <Col span={1}></Col>
                                <Col span={5}>
                                    <Card title="Xem thêm">
                                        <Card.Grid style={gridStyle} onClick={() => window.location = "/redalert"}>
                                            Đi tới trang cảnh báo<br></br>
                                            <Text type="danger">KHẨN CẤP</Text></Card.Grid>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Cầu Diễn" description="dây quá rối" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://photo-2-baomoi.zadn.vn/2019_05_23_19_30822052/6b0ec677d13738696126.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Thanh Xuân" description="Dây bị trùng xuống" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Độ cao dây quá thấp" />
                                    </Card>
                                    </div>
                                </Col>
                                
                                <Col span={1}></Col>
                                <Col span={5}>
                                    <Card title="Xem thêm">
                                        <Card.Grid style={gridStyle} onClick={() => window.location="/yellowalert"}>
                                            Đi tới trang cảnh báo<br></br>
                                            <Text type="warning">ƯU TIÊN</Text></Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Diễn" description="Lắp đặt công tơ mới" />
                                        onClick={() => window.location="/alertdetail"}
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://photo-2-baomoi.zadn.vn/2019_05_23_19_30822052/6b0ec677d13738696126.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Thanh Xuân" description="Lắp đặt công tơ mới" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div>
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                        onClick={() => window.location="/alertdetail"}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Bảo trì công tơ" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={1}></Col>

                                <Col span={5}>
                                    <Card title="Xem thêm">
                                        <Card.Grid style={gridStyle} onClick={() => window.location = "/greenalert"}>
                                            Đi tới trang cảnh báo<br></br>
                                            <Link target="_blank">
                                                ƯU TIÊN THẤP
                                            </Link>
                                        </Card.Grid>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                    </Content>
                </Layout>
            </Layout>
        </div >
    )

}

export default WarningGrid;
