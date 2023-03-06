import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom" 
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>I'm a full-stack developer,for sevices contact me</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>

  </div>;
};

export default AboutContent;
