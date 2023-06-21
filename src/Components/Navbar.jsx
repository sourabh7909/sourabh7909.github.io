import React, { useState } from "react";
import Resume from "../images/Sourabh_Patidar_Resume.pdf"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Navbar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Contact from "./Contact";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
   
      <nav  className="main-nav" id="nav-menu">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>ourabh
            <span>P</span>atidar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div 
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <AnchorLink href="#home">
              <NavLink className='nav-link home' to="/">Home</NavLink>
              </AnchorLink>
            </li> 
            <li>
              <AnchorLink href="#about">
              <NavLink className='nav-link about' to="/about">About</NavLink>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects">
              <NavLink className='nav-link projects'  to="/project">Project</NavLink>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills">
              <NavLink className='nav-link skills'  to="/skills">Skills</NavLink>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">
              <NavLink className='nav-link contact' to="/contact">Contact</NavLink>
              </AnchorLink>
            </li>
            <li>
            <a id="resume-link-1" className="nav-link resume" target="_blank" href={Resume} download={"Resume"}><button id ='resume-button-1' >Resume</button></a>
            </li>
            {/* <a  id="resume-link-1" target='_blank'  href={Resume} download={"Resume"}><li>
            <NavLink href={Resume} download={"Resume"} className={'nav-link resume'} to="/resume"><button id ='resume-button-1'>Resume</button></NavLink>
            </li></a> */}
            {/* <a id="resume-link-1" target="_blank" href={Resume} download={"Resume"}><button id ='resume-button-1' style={{fontSize:"22px",color:"rgba(114, 115, 115, 0.8)",marginLeft:"40px"}}>Resume</button></a> */}
          </ul>
          
        </div>
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;