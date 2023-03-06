import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
          <div>
            <p>Dancun, Nairobi</p>
            <p>Kenya</p>
          </div>
        </div>
        <div className="phone">
          <h4>
          <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
          +254 114588018
          </h4>
        </div>
        <div className="email">
          <h4>
          <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
           dancun616@gmail.com
          </h4>
        </div>
      </div>
      <div className="right">
        <h4>About</h4>
        <p>welcome to your portfolio!.</p>
      </div>
    </div>
  </div>;
};

export default Footer;
