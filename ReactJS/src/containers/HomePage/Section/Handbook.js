import React, { Component } from "react";
import { connect } from "react-redux";
import "./Handbook.scss";
import handbookImage1 from "../../../assets/handbook/1.png";
import handbookImage2 from "../../../assets/handbook/2.jpg";
import handbookImage3 from "../../../assets/handbook/3.png";
import handbookImage4 from "../../../assets/handbook/4.png";

import Slider from "react-slick";

class Handbook extends Component {
  render() {
    return (
      <div>
        <div className="section-specialty section-share">
          <div className="section-container">
            <div className="section-header">
              <span>Cẩm nang</span>
              <button className="button-specialty">Tất cả bài viết</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-content">
                  <img className="section-content-img" src={handbookImage1} />
                  <div className="section-content-text">
                    Danh sách 6 bác sĩ Cơ xương khớp giỏi, có tiếng tại TPHCM
                    (Phần 4)
                  </div>
                </div>
                <div className="section-content">
                  <img className="section-content-img" src={handbookImage2} />
                  <div className="section-content-text">
                    Khám và điều trị bệnh về răng ở đâu tốt tại Hà Nội
                  </div>
                </div>
                <div className="section-content">
                  <img className="section-content-img" src={handbookImage3} />
                  <div className="section-content-text">
                    Chia sẻ kinh nghiệm khám tiêu hóa tại Bệnh viện Hưng Việt
                  </div>
                </div>
                <div className="section-content">
                  <img className="section-content-img" src={handbookImage4} />
                  <div className="section-content-text">
                    Review chi tiết và lưu ý đi khám tại Trung tâm điều trị Bệnh
                    trĩ Hà Nội - Số 1
                  </div>
                </div>
              </Slider>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
