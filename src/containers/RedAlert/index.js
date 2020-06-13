import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import PieChart from '../../components/PieChart';
import ColChart from '../../components/ColChart';
import {Layout, Card, Col, Row, Select, Alert, Breadcrumb} from 'antd';

const { Sider, Content } = Layout;
const { Option } = Select;
const { Meta } = Card;

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

const RedAlert = (props) => {
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
                    <Content className="body-mod">
                         {/* Filter  */}
                        <p>Lọc theo dự án &nbsp; &nbsp;
                        <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn loại dự án"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="suachua">Sửa chữa</Option>
                                <Option value="baotri">Bảo trì</Option>
                                <Option value="kiemtra">Kiếm tra</Option>
                            </Select>
                            &nbsp; theo đội đảm nhận &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn đội"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="doi1">Đội 1</Option>
                                <Option value="doi2">Đội 2</Option>
                                <Option value="doi3">Đội 3</Option>
                            </Select>
                            &nbsp; theo người quản lý &nbsp; &nbsp;
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Chọn tên"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="vana">Nguyễn Vân Á</Option>
                                <Option value="tritue">Trần Trí Tuệ</Option>
                                <Option value="nhannghia">Trọng Nhân Nghĩa</Option>
                            </Select>
                        </p> 

                        {/* Location-Card */}
                        <div className="site-card-wrapper">
                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable   />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://img.vtcnew.com.vn/files/f2/2014/03/19/ha-noi-ma-tran-cot-dien-bay-nguoi-di-duong-0.jpg" />}
                                    >
                                        <Meta title="Khu vực Đống Đa" description="Cây đổ lên dây điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                    >
                                        <Meta title="Khu vực Nam Từ Liêm" description="Chập điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6}>
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
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error"  showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                                <Col span={6} >
                                    <div onClick={() => window.location="/alertdetail"}>
                                    <Alert message="Khẩn cấp" type="error" showIcon closable />
                                    <Card
                                        bordered={true}
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media.doisongphapluat.com/447/2016/6/11/ngoi-nha-nuot-cot-dien1161.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Giấy" description="Cháy cột điện" />
                                    </Card>
                                    </div>
                                </Col>
                            </Row>
{/* 
                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Diễn" description="dây quá rối" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://photo-2-baomoi.zadn.vn/2019_05_23_19_30822052/6b0ec677d13738696126.jpg" />}
                                    >
                                        <Meta title="Khu vực Thanh Xuân" description="Dây bị trùng xuống" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Độ cao dây quá thấp" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Cần cắt tỉa cây xung quanh" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên" type="warning" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Cần di chuyển cột điện đến vị trí mới" />
                                    </Card>
                                </Col>
                            </Row>
                            <Row className=".location-alert-grid" gutter={[16, 16]}>
                                <Col span={6} >
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="http://cafebiz.cafebizcdn.vn/thumb_w/640/2016/photo-2-1481634743125.jpg" />}
                                    >
                                        <Meta title="Khu vực Cầu Diễn" description="Lắp đặt công tơ mới" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://photo-2-baomoi.zadn.vn/2019_05_23_19_30822052/6b0ec677d13738696126.jpg" />}
                                    >
                                        <Meta title="Khu vực Thanh Xuân" description="Lắp đặt công tơ mới" />
                                    </Card>
                                </Col>
                                <Col span={6} >
                                    <Alert message="Ưu tiên thấp" type="info" showIcon closable />
                                    <Card
                                        hoverable
                                        style={{ height: 300, width: '100%' }}
                                        cover={<img height='200px' alt="example" src="https://media1.nguoiduatin.vn/media/hoang-van-viet/2019/09/02/xe-tai-lui-tong-do-nhieu-cot-dien-nguoi-dan-chiu-canh-khong-co-dien-trong-ngay-nghi-le.jpg" />}
                                    >
                                        <Meta title="Khu vực Hoàn Kiếm" description="Bảo trì công tơ" />
                                    </Card>
                                </Col>
                            </Row> */}
                        </div>

                    </Content>
                </Layout>
            </Layout>
        </div >
    )

}

export default RedAlert;
