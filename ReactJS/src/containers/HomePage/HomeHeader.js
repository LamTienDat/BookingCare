import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <div className="heaader-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>Chuyên khoa</b>
              </div>
              <p className="sub-title">Tìm bác sĩ theo chuyên khoa</p>
            </div>
            <div className="child-content">
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <p className="sub-title">Chọn bệnh viện, phòng khám</p>
            </div>
            <div className="child-content">
              <div>
                <b>Bác sĩ</b>
              </div>
              <p className="sub-title">Chọn bác sĩ giỏi</p>
            </div>
            <div className="child-content">
              <div>
                <b>Gói khám</b>
              </div>
              <p className="sub-title">Khám sức khỏe tổng quát</p>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle"></i>
              Hỗ trợ
            </div>
            <div className="flag">VN</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
