import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import specialtyImage1 from "../../../assets/specialty/xuongkhop.jpg";
import specialtyImage2 from "../../../assets/specialty/thankinh.jpg";
import specialtyImage3 from "../../../assets/specialty/tieuhoa.jpg";
import specialtyImage4 from "../../../assets/specialty/timmach.jpg";
import specialtyImage5 from "../../../assets/specialty/taimuihong.jpg";
import specialtyImage6 from "../../../assets/specialty/cotsong.jpg";
class Specialty extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    return (
      <div>
        <div className="section-specialty">
          <div className="section-container">
            <div className="section-header">
              <span>Chuyên khoa phổ biến</span>
              <button className="button-specialty">Xem thêm </button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="img-customize">
                  <img src={specialtyImage1} />
                  <div>Cơ xương khớp</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage2} />
                  <div>Thần kinh</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage3} />
                  <div>Tiêu hóa</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage4} />
                  <div>Tim mạch</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage5} />
                  <div>Tai mũi họng</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage6} />
                  <div>Cột sống</div>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
