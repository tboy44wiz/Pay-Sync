import React from "react";

//  Importing "_footer.css".
import './_footer.css';

import paysyncLogo from '../../../assets/Group 22290.svg';
import appleLogo from '../../../assets/Apple-logo.svg';
import androidLogo from '../../../assets/Android-logo.svg';
import InstagramIcon from '../../../assets/InstagramIcon.svg';
import LinkedInIcon from '../../../assets/Icon awesome-linkedin.svg';
import TwitterIcon from '../../../assets/Icon awesome-twitter.svg';
import facebookIcon from '../../../assets/Icon awesome-facebook-square.svg';

export default function footer() {
  return <div className="footer-main">
    <div className="footer-left">
      <img src={paysyncLogo} alt="" className="footer-logo"/>
      <div className="footer-msg">
        We believe that the option of employees' accessing their earned salary on a daily basis is the first step on the road to prosperity
      </div>
      <div className="learn-more">Learn more</div>
      <div className="social-icons">
        <img src={InstagramIcon} alt="" className="social-logo"/>
        <img src={LinkedInIcon} alt="" className="social-logo"/>
        <img src={TwitterIcon} alt="" className="social-logo"/>
        <img src={facebookIcon} alt="" className="social-logo"/>
      </div>
    </div>

    <div className="menu-info__wrapper">
      <div className="footer-menu">
        <div className="menu-header">Menu</div>
        <h6>Home</h6>
        <h6>The App</h6>
        <h6>FAQ</h6>
        <h6>About Us</h6>
        <h6>Contact Us</h6>
      </div>

      <div className="footer-info">
        <div className="info-header">Info</div>
        <h6>Home</h6>
        <h6>The App</h6>
        <h6>FAQ</h6>
        <h6>About Us</h6>
        <h6>Contact Us</h6>
      </div>
    </div>

    <div className="footer-newsletter">
      <div className="newletter-header">Newletter</div>
      <div className="subscription-wrapper">
        <input type="email" name="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
      <h6>Download the app</h6>
      <div className="appstore-wrapper">
        <img src={androidLogo} alt="" />
        <img src={appleLogo} alt="" />
      </div>
    </div>
  </div>;

}
