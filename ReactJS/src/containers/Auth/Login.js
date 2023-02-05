import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
// import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = () => {
    console.log(this.state.username, this.state.password);
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label for="">Username:</label>
              <input
                onChange={(event) => this.handleOnChangeUser(event)}
                value={this.state.username}
                type="text"
                className="form-control"
                placeholder="Enter your user name"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label for="">Password:</label>
              <div className="custom-input-password">
                <input
                  onChange={(event) => this.handleOnChangePassword(event)}
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fas fa-eye-slash"
                        : "far fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                onClick={() => {
                  this.handleLogin();
                }}
                type=""
                className="btn-login"
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-pw">Forgot your password ?</span>
            </div>
            <div className="col-12 text-center">
              <span>Or login with:</span>
            </div>
            <div className="col-12 login-social ">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-messenger facebook"></i>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
