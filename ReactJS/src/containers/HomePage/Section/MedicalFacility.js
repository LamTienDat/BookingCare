import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import specialtyImage1 from "../../../assets/medicalFal/vietduc.jpg";
import specialtyImage2 from "../../../assets/medicalFal/choray.jpg";
import specialtyImage3 from "../../../assets/medicalFal/yduoc.jpg";
import specialtyImage4 from "../../../assets/medicalFal/quandoi.jpg";
import specialtyImage5 from "../../../assets/medicalFal/hungviet.png";
import specialtyImage6 from "../../../assets/medicalFal/medlatec.png";

import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div>
        <div className="section-specialty section-share">
          <div className="section-container">
            <div className="section-header">
              <span>Cơ sở y tế nổi bật</span>
              <button className="button-specialty">Tìm kiếm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="img-customize">
                  <img src={specialtyImage1} />
                  <div>Bệnh viện Hữu nghị Việt Đức</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage2} />
                  <div>Bệnh viện Chợ Rẫy</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage3} />
                  <div>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage4} />
                  <div>
                    Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân
                    đội 108
                  </div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage5} />
                  <div>Bệnh viện Ung bướu Hưng Việt</div>
                </div>
                <div className="img-customize">
                  <img src={specialtyImage6} />
                  <div>Hệ thống y tế MEDLATEC</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
