import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import doctorImage1 from "../../../assets/doctor/bshung.jpg";
import doctorImage2 from "../../../assets/doctor/bsckii-tran-minh-khuyen.jpg";
import doctorImage3 from "../../../assets/doctor/pgs-nguyen-thi-hoai-an.jpg";
import doctorImage4 from "../../../assets/doctor/bs-duy-2022.jpg";
import doctorImage5 from "../../../assets/doctor/gs-do-nhu-hon.jpg";
import doctorImage6 from "../../../assets/doctor/bs-tran-huu-binh.jpg";
import * as actions from "../../../store/actions";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router";

import { languages } from "../../../utils/constant";

class OutstandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topDoctors: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        topDoctors: this.props.topDoctorsRedux,
      });
    }
  }
  componentDidMount() {
    this.props.loadTopDoctors();
  }
  handleViewDetailDoctor = (doctor) => {
    console.log("view detail doctor", doctor);
    this.props.history.push(`/detail_doctor/${doctor.id}`);
  };
  render() {
    let language = this.props.language;
    let allDoctors = this.state.topDoctors;

    return (
      <div>
        <div className="section-specialty">
          <div className="section-container">
            <div className="section-header">
              <span>
                <FormattedMessage id="homepage.out-standing-doctor" />
              </span>
              <button className="button-specialty">
                <FormattedMessage id="homepage.search" />
              </button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                {allDoctors &&
                  allDoctors.length > 0 &&
                  allDoctors.map((item, index) => {
                    let imageBase64 = "";
                    if (item.image) {
                      imageBase64 = new Buffer(item.image, "base64").toString(
                        "binary"
                      );
                    }
                    let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                    let nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName} `;

                    return (
                      <div
                        className="section-body-content"
                        onClick={() => this.handleViewDetailDoctor(item)}
                      >
                        <div
                          className="doctor-img"
                          style={{
                            backgroundImage: `url(${imageBase64})`,
                          }}
                        ></div>
                        <div className="doctor-title">
                          {language === languages.VI ? nameVi : nameEn}
                        </div>
                        <div className="doctor-specialty">Da liễu</div>
                      </div>
                    );
                  })}
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
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)
);
