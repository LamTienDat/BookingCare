import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import Select from "react-select";
import { dateFormat, languages } from "../../../utils/constant.js";
import DatePicker from "../../../components/Input/DatePicker";
import { toast } from "react-toastify";
import moment from "moment";
import _ from "lodash";
import { bulkCreateSchedule } from "../../../services/userService";
class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDoctors: [],
      selectedDoctors: {},
      currenDate: "",
      rangeTime: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctorRedux();
    this.props.fetchAllShedule();
  }
  handleChangeSelect = async (selectedDoctors) => {
    this.setState({ selectedDoctors });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.allSchedule !== this.props.allSchedule) {
      let data = this.props.allSchedule;
      if (data && data.length > 0) {
        data = data.map((item) => ({
          ...item,
          isSelected: false,
        }));
      }
      this.setState({
        rangeTime: this.props.allSchedule,
      });
    }
  }
  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelEn = `${item.lastName} ${item.firstName}`;
        let labelVi = `${item.firstName} ${item.lastName}`;
        object.label = language === languages.VI ? labelVi : labelEn;
        object.index = item.id;
        result.push(object);
      });
    }
    return result;
  };

  onChangeDatePicker = (date) => {
    this.setState({
      currenDate: date[0],
    });
  };
  handleClickBtn = (time) => {
    let { rangeTime } = this.state;
    if (rangeTime && rangeTime.length > 0) {
      rangeTime = rangeTime.map((item) => {
        if (item.id === time.id) item.isSelected = !item.isSelected;
        return item;
      });
      this.setState({
        rangeTime: rangeTime,
      });
    }
  };
  handleSaveSchedule = async () => {
    let result = [];
    let { rangeTime, selectedDoctors, currenDate } = this.state;
    console.log("selected doctor: ", selectedDoctors);
    if (!currenDate) {
      toast.error("Invalid date !");
      return;
    }
    if (selectedDoctors && _.isEmpty(selectedDoctors)) {
      toast.error("Invalid doctor !");
    }
    // let formatedDate = moment(currenDate).format(dateFormat.SEND_TO_SERVER);
    let formatedDate = new Date(currenDate).getTime();

    if (rangeTime && rangeTime.length > 0) {
      let selectiedTime = rangeTime.filter((item) => item.isSelected === true);
      if (selectiedTime && selectiedTime.length > 0) {
        selectiedTime.map((time) => {
          let obj = {};
          obj.doctorId = selectedDoctors.index;
          obj.date = formatedDate;
          obj.timeType = time.keyMap;
          result.push(obj);
        });
      } else {
        toast.error("Invalid selected time !");
        return;
      }
      console.log("check rs: ", result);
      let res = await bulkCreateSchedule({
        arrSchedule: result,
        doctorId: selectedDoctors.index,
        date: formatedDate,
      });
      console.log("check bulk create schedule :", res);
      return result;
    }
  };
  render() {
    let rangeTime = this.state.rangeTime;
    console.log(rangeTime);
    return (
      <div className="manage-schedule-container">
        <div className="text-center manage-schedule-title">
          <FormattedMessage id="manage-schedule.title" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 form-group">
              <label for="">
                <FormattedMessage id="manage-schedule.choose-doctor" />
              </label>
              <Select
                value={this.state.selectedDoctors}
                onChange={this.handleChangeSelect}
                options={this.state.listDoctors}
              />
            </div>
            <div className="col-6 form-group">
              <label for="">
                <FormattedMessage id="manage-schedule.choose-date" />
              </label>
              <DatePicker
                onChange={this.onChangeDatePicker}
                className="form-control"
                value={this.state.currenDate}
                minDate={new Date()}
              />
            </div>

            <div className="col-12 pick-time">
              <label for="">
                <FormattedMessage id="manage-schedule.choose-time" />
              </label>
              <div className="time">
                {rangeTime &&
                  rangeTime.length > 0 &&
                  rangeTime.map((item, index) => {
                    return (
                      <button
                        className={
                          item.isSelected === true
                            ? " btn btn-chedule active"
                            : "btn btn-chedule"
                        }
                        key={index}
                        onClick={() => this.handleClickBtn(item)}
                      >
                        <span>{item.valueVi}</span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
          <button
            type=""
            className="btn btn-primary"
            onClick={() => this.handleSaveSchedule()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
    allSchedule: state.admin.allSchedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctorRedux: () => dispatch(actions.fetchAllDoctor()),
    fetchAllShedule: () => dispatch(actions.fetchAllShedule()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
