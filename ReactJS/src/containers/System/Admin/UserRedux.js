import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { languages } from "../../../utils/constant.js";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgUrl: "",
      isOpen: false,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    //   console.log(res);
    // } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
  }
  handleOnChangeInput = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let oblectUrl = URL.createObjectURL(file);
      this.setState({ previewImgUrl: oblectUrl });
    }
    console.log("immage: ", file);
  };
  openPreviewImage = () => {
    if (!this.state.previewImgUrl) {
      return;
    }
    this.setState({ isOpen: true });
  };
  render() {
    let language = this.props.language;
    let genders = this.state.genderArr;
    let roles = this.state.roleArr;
    let positions = this.state.positionArr;
    let isGetGenders = this.props.isLoadingGender;
    console.log("check state from redux", this.state);
    return (
      <div className="user-redux-container">
        <div className="title">User Redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {isGetGenders === true ? "Loading genders..." : ""}
              </div>
              <div className="col-12 my-3">Thêm mới người dùng</div>
              <div className="col-3">
                <label>Email</label>
                <input className="form-control" type="email" name="" value="" />
              </div>
              <div className="col-3">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name=""
                  value=""
                />
              </div>
              <div className="col-3">
                <label>First Name</label>
                <input className="form-control" type="text" name="" value="" />
              </div>
              <div className="col-3">
                <label>Last Name</label>
                <input className="form-control" type="text" name="" value="" />
              </div>
              <div className="col-3">
                <label>Phone Number</label>
                <input className="form-control" type="text" name="" value="" />
              </div>
              <div className="col-9">
                <label>Address</label>
                <input className="form-control" type="text" name="" value="" />
              </div>
              <div className="col-3">
                <label>Gender</label>
                <select className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                  <option value="">...</option>
                </select>
              </div>
              <div className="col-3">
                <label>Position</label>
                <select className="form-control">
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                  <option value="">...</option>
                </select>
              </div>
              <div className="col-3">
                <label>Role</label>
                <select className="form-control">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                  <option value="">...</option>
                </select>
              </div>
              <div className="col-3">
                <label>Image</label>
                <div className="preview-img-container">
                  <input
                    id="previewImage"
                    type="file"
                    hidden
                    onChange={(event) => this.handleOnChangeInput(event)}
                  />
                  <label htmlFor="previewImage" className="label-upload">
                    Upload<i className="fas fa-upload"></i>
                  </label>
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${this.state.previewImgUrl})`,
                    }}
                    onClick={() => this.openPreviewImage()}
                  ></div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
