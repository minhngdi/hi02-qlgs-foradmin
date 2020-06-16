
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Trụ sở - Chi nhánh</h2>
              <div>
                <a>Số 1 Đại Cồ Việt</a>
              </div>
              <div>
                <a>Số 2 Trần Đại Nghĩ</a>
              </div>
              <div>
                <a>Số 3 Giải Phóng</a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Đối tác tin cậy</h2>
              <div>
                <a href="http://www.evnhanoi.vn/"> Tổng công ty Điện lực Hà Nội</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.evngenco1.com.vn/">Tổng công ty Phát điện 1</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="evngenco2.vn">Tổng công ty Phát điện 2</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.genco3.com/">Tổng công ty Phát điện 3</a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Tài liệu liên quan</h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1QmFgcwUVwf18gZtSp2sLm8W-avQg16Du">
                  Tài liệu đặc tả
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="" />
                Liên hệ nhóm phát triển
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/minhngdi/hi02-qlgs-foradmin">Nhóm</a>
                <span> : </span>
                2019II_HI02
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/minhngdi/hi02-qlgs-foradmin">GV hướng dẫn</a>
                <span> : </span>
                <br></br>
                TS. Vũ Thị Hương Giang
              </div>
              <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/minhngdi/hi02-qlgs-foradmin">Thành Viên</a>
                <span> : </span>
                <br></br>
                Nguyễn Đình Minh -NT
                <br></br>
                Nguyễn Duy Nguyên
                <br></br>
                Phạm Việt Cường
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright ©   Nhóm HI 02 2019II IT4442</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
