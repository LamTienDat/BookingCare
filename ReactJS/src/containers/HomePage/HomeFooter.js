import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant.js";
import { changeLanguageApp } from "../../store/actions";
class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="footer-content">
          <div className="footer-content-infor">
            <div className="footer-logo"></div>
            <div className="footer-agency">
              <h2>Công ty Cổ phần Công nghệ BookingCare</h2>
              <span>
                <i className="fas fa-map-marker-alt"></i>
                28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
              </span>
              <br></br>
              <span>
                <i className="fas fa-check"></i>
                ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
              </span>
            </div>
          </div>
          <div className="footer-content-nav">
            <ul>
              <li>
                <a href="">Liên hệ hợp tác</a>
              </li>
              <li>
                <a href="">Gói chuyển đổi số doanh nghiệp</a>
              </li>
              <li>
                <a href="">Tuyển dụng</a>
              </li>
              <li>
                <a href="">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="">Chính sách Bảo mật</a>
              </li>
              <li>
                <a href="">Quy trình hỗ trợ giải quyết khiếu nại</a>
              </li>
              <li>
                <a href="">Quy chế hoạt động</a>
              </li>
            </ul>
          </div>
          <div className="footer-content-other">
            <div className="footer-loaction">
              <strong>Trụ sở tại Hà Nội</strong>
              <br></br>
              28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
            </div>
            <div className="footer-office">
              <strong>Văn phòng tại TP Hồ Chí Minh</strong>
              <br></br>
              Số 01, Hồ Bá Kiện, Phường 15, Quận 10
            </div>
            <div className="footer-support">
              <strong>Hỗ trợ khách hàng</strong>
              <br></br>
              support@bookingcare.vn (7h - 20h)
            </div>
          </div>
        </div>
        <div className="footer-install"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
