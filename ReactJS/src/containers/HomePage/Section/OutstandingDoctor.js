import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import doctorImage1 from "../../../assets/doctor/bshung.jpg";
import doctorImage2 from "../../../assets/doctor/bsckii-tran-minh-khuyen.jpg";
import doctorImage3 from "../../../assets/doctor/pgs-nguyen-thi-hoai-an.jpg";
import doctorImage4 from "../../../assets/doctor/bs-duy-2022.jpg";
import doctorImage5 from "../../../assets/doctor/gs-do-nhu-hon.jpg";
import doctorImage6 from "../../../assets/doctor/bs-tran-huu-binh.jpg";

import Slider from "react-slick";

class OutstandingDoctor extends Component {
  render() {
    return (
      <div>
        <div className="section-specialty">
          <div className="section-container">
            <div className="section-header">
              <span>Bác sĩ nổi bật tuần qua</span>
              <button className="button-specialty">Tìm kiếm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage1} />
                  <div className="doctor-title">
                    Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                  </div>
                  <div className="doctor-specialty">Da liễu</div>
                </div>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage2} />
                  <div className="doctor-title">
                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                  </div>
                  <div className="doctor-specialty">Sức khỏe tâm thần</div>
                </div>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage3} />
                  <div className="doctor-title">
                    Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
                  </div>
                  <div className="doctor-specialty">Tai Mũi Họng</div>
                </div>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage4} />
                  <div className="doctor-title">
                    Tiến sĩ, Bác sĩ Chuyên khoa II Trà Anh Duy
                  </div>
                  <div className="doctor-specialty">Nam học</div>
                </div>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage5} />
                  <div className="doctor-title">
                    Giáo sư, Thầy thuốc nhân dân Đỗ Như Hơn
                  </div>
                  <div className="doctor-specialty">Chuyên khoa Mắt</div>
                </div>
                <div className="section-body-content">
                  <img className="doctor-img" src={doctorImage6} />
                  <div className="doctor-title">
                    PGS, TS, Giảng viên cao cấp Trần Hữu Bình
                  </div>
                  <div className="doctor-specialty">Sức khỏe tâm thần</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
