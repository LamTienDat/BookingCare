import React, { Component } from "react";
import { connect } from "react-redux";
import { USER_ROLE, languages } from "../../utils/constant.js";
import { changeLanguageApp } from "../../store/actions";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu, doctorMenu } from "./menuApp";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
    };
  }
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  componentDidMount() {
    const { userInfo } = this.props;
    let menu = [];
    if (userInfo && userInfo.roleId) {
      let role = userInfo.roleId;
      if (role === USER_ROLE.ADMIN) {
        menu = adminMenu;
      } else if (role === USER_ROLE.DOCTOR) {
        menu = doctorMenu;
      }
    }
    this.setState({
      menuApp: menu,
    });
  }

  render() {
    const { processLogout, userInfo } = this.props;
    let language = this.props.language;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={this.state.menuApp} />
        </div>

        <div className="languages">
          <div className="welcome">
            <FormattedMessage id="homeheader.welcome" />,{" "}
            {userInfo && userInfo.lastName ? userInfo.lastName : " "}
          </div>
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
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
