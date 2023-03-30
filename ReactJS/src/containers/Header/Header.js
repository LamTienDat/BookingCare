import React, { Component } from "react";
import { connect } from "react-redux";
import { languages } from "../../utils/constant.js";
import { changeLanguageApp } from "../../store/actions";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";

class Header extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    let language = this.props.language;
    console.log(this.props.language);
    const { processLogout } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        <div className="languages">
          <div
            className={
              language === languages.EN ? "language-en active" : "language-en"
            }
          >
            <span onClick={() => this.changeLanguage(languages.EN)}>EN</span>
          </div>
          <div
            className={
              language === languages.VI ? "language-vi active" : "language-vi"
            }
          >
            <span onClick={() => this.changeLanguage(languages.VI)}>VI</span>
          </div>
          {/* nút logout */}
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
