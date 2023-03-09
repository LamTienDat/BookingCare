import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant.js";
import { changeLanguageApp } from "../../store/actions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    let language = this.props.language;
    console.log(this.props.language);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="heaader-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.specaility" />
                  </b>
                </div>
                <p className="sub-title">
                  <FormattedMessage id="homeheader.finddoctor" />
                </p>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facilities" />
                  </b>
                </div>
                <p className="sub-title">
                  <FormattedMessage id="homeheader.choose-health-facilities" />
                </p>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <p className="sub-title">
                  <FormattedMessage id="homeheader.choose-doctor" />
                </p>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.examination-package" />
                  </b>
                </div>
                <p className="sub-title">
                  <FormattedMessage id="homeheader.health-check" />
                </p>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                Hỗ trợ
              </div>
              <div
                className={
                  language === languages.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(languages.EN)}>
                  EN
                </span>
              </div>
              <div
                className={
                  language === languages.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(languages.VI)}>
                  VI
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="title1">
            <FormattedMessage id="banner-text.1st-row" />
          </div>
          <div className="title2">
            <FormattedMessage id="banner-text.2nd-row" />
          </div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tìm chuyên khoa" />
          </div>
          <div className="option">
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-hospital-alt"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.specaility" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.remote" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="far fa-clipboard"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.general-examination" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-stethoscope"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.medical-test" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="far fa-user-circle"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.mental-health" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-user-md"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.dentist" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-procedures"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.surgery-package" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="fas fa-toolbox"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.medical-products" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <i class="far fa-heart"></i>
              </div>
              <div className="text-child">
                <FormattedMessage id="option.business-health" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
