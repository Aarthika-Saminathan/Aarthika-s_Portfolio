import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="Footer Logo" /> */}
        {/*   <h1>Aarthika</h1> */}
         {/*  <p>I'm a front-end developer.</p> */}
        </div>

        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Aarthika. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
