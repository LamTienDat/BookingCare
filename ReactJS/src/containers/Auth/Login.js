import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { handleLoginApi } from "../../services/userService";

import * as actions from "../../store/actions";

import "./Login.scss";
import { every } from "lodash";
// import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
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
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        //wrong input
        this.setState({ errMessage: data.message });
      }
      if (data && data.errCode == 0) {
        //log in success
        this.props.userLoginSuccess(data.user);
        console.log("done");
      }
    } catch (error) {
      // mising input
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleLogin();
    }
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
                  onKeyDown={(event) => this.handleKeyDown(event)}
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
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
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
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
