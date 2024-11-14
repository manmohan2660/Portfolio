import "./HeroImg.css";

import React from 'react'
import IntroImg from "../assets/images2.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="IntroImg"/>
        </div>

        <div className="content">
            <p>Hi,I'm Manmohan</p>
            <h1>A full stack Webdeveloper</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            

            </div>
        </div>

  )
}

export default HeroImg
