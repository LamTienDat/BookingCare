import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";
import localization from "moment/locale/vi";
import { languages } from "../../../utils";
import { getScheduleByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";
class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
      allAvailTime: [],
    };
  }

  async componentDidMount() {
    let { language } = this.props;

    let allDates = this.getArrDays(language);
    this.setState({
      allDays: allDates,
    });
    // this.getArrDays(language);
  }
  getArrDays = (language) => {
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      if (language === languages.VI) {
        object.label = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      } else {
        object.label = moment(new Date())
          .add(i, "days")
          .locale("en")
          .format("ddd - DD/MM");
      }
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      arrDate.push(object);
    }
    return arrDate;
  };
  handleOnChangeDate = async (event) => {
    if (this.props.doctorId && this.props.doctorId !== -1) {
      let doctorId = this.props.doctorId;
      let date = event.target.value;
      let res = await getScheduleByDate(doctorId, date);
      if (res && res.errCode === 0) {
        this.setState({
          allAvailTime: res.data ? res.data : [],
        });
      }
    }
  };
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      let allDates = this.getArrDays(this.props.language);
      this.setState({
        allDays: allDates,
      });
    }
    if (this.props.doctorId !== prevProps.doctorId) {
      let allDates = this.getArrDays(this.props.language);
      let res = await getScheduleByDate(this.props.doctorId, allDates[0].value);
      this.setState({
        allAvailTime: res.data ? res.data : [],
      });
    }
  }
  render() {
    let { allDays, allAvailTime } = this.state;
    let { language } = this.props;
    console.log(allAvailTime);
    return (
      <div className="schedule-container">
        <div className="all-schedule">
          <select onChange={(event) => this.handleOnChangeDate(event)}>
            {allDays &&
              allDays.length > 0 &&
              allDays.map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="all-availble-time">
          <div className="calendar">
            <span>
              <i className="far fa-calendar"></i>
              <FormattedMessage id="patient.detail-doctor.schedule" />
            </span>
          </div>
          <div className="time-content">
            {allAvailTime && allAvailTime.length > 0 ? (
              <>
                {allAvailTime.map((item, index) => {
                  return (
                    <button key={index}>{item.timeTypeData.valueVi}</button>
                  );
                })}
                <div className="booking">
                  {language === languages.VI ? (
                    <span>
                      Chọn <i className="far fa-hand-point-up"></i> và đặt miễn
                      phí
                    </span>
                  ) : (
                    <span>
                      Choose <i className="far fa-hand-point-up"></i> and free
                      booking
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div className="no-chedule">
                {language === languages.VI
                  ? "Bác sĩ không có lịch hẹn vào ngày này"
                  : "This doctor doesn't have schedule in this day"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
