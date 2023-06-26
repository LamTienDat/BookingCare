import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedule.scss";
class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    return (
      <div className="schedule-container">
        <div className="all-schedule">
          <select>
            <option value="">Thứ 2</option>
            <option value="">Thứ 3</option>
            <option value="">Thứ 4</option>
          </select>
        </div>
        <div className="all-availble-time"></div>
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
