import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";
import NewsImage1 from "../../../assets/News/suckhoedoisong.png";
import NewsImage2 from "../../../assets/News/cuc-cong-nghe-thong-tin-bo-y-te-2.png";
import NewsImage3 from "../../../assets/News/ictnews.png";
import NewsImage4 from "../../../assets/News/vnexpress.png";
import NewsImage5 from "../../../assets/News/vtv1.png";
import NewsImage6 from "../../../assets/News/infonet.png";

class About extends Component {
  render() {
    return (
      <div className="section-about">
        <h2 className="about-text-header">Truyền thông nói về BookingCare</h2>
        <div className="about-content">
          <div className="about-video">
            <iframe
              width="570"
              height="321"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="about-list">
            <ul>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage1} />
                </a>
              </li>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage2} />
                </a>
              </li>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage3} />
                </a>
              </li>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage4} />
                </a>
              </li>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage5} />
                </a>
              </li>
              <li>
                <a href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
                  <img src={NewsImage6} />
                </a>
              </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
