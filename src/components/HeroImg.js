import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="content">
            <h1>Welcome to my-portfolio.</h1>
            <div>
                <Link to="/project" className="btn">Add your project</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg