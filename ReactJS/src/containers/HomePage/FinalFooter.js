import React, { Component } from "react";
import { connect } from "react-redux";
import "./FinalFooter.scss";
import SocialsImage1 from "../../assets/socials/facebook-square.svg";
import SocialsImage2 from "../../assets/socials/youtube-square.svg";

class FinalFooter extends Component {
  render() {
    return (
      <div className="final-footer">
        <div className="final-footer-content">
          <div className="left-content">
            <small>© 2023 BookingCare.</small>
          </div>
          <div className="right-content">
            <a href="https://www.facebook.com/bookingcare">
              <img src={SocialsImage1} />
            </a>
            <a href="https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ">
              <img src={SocialsImage2} />
            </a>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalFooter);
