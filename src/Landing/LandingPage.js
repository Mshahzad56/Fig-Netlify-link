import React from "react";
import '../Landing/LandingPage.css'
import Button from "@mui/material/Button";
import { FiSearch } from "react-icons/fi";
import DesginElement from "../Design/DesginElement";
import {Link} from 'react-router-dom'
import HomeNavbar from "../HomeNavbar/HomeNavbar";



function LandingPage() {
  return (
    <>
    
    <div className="LandingPage-main">
    <div style={{width:'100%'}}>
    <HomeNavbar/>
    </div>
    <div style={{height:'510px',marginTop:'50px',padding:'25px'}}>
    <div className="content">
        <h1>Figma Freebie</h1>
        <p>Download 1720+ freeble resources for Figma</p>
        <div className="landingPage-Buttons">
          <Button variant="contained">Upload a Design</Button>
          <Button variant="outlined">Upgrade to Premium</Button>
        </div>
      </div>
      <div className="search">
        <div className="search-icon">
          <div className="input-field"><input type="text" id="text" placeholder="Search"/></div>
          <div><FiSearch /></div>
        </div>
      </div>

      
        <div className="Landing-page-buttons">
          <ul>
            <li>
              <Link className="Active" href="#">All Designs</Link>
            </li>
            <li>
              <Link href="Web">Web</Link>
            </li>
            <li>
              <Link href="Mobile">Mobile</Link>
            </li>
            <li>
              <Link href="Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="Landing">Landing</Link>
            </li>
            <li>
              <Link href="Branding">Branding</Link>
            </li>
            <li>
              <Link href="Social">Social</Link>
            </li>
          </ul>
        </div>
    </div>
       
      </div>
      <DesginElement/>
      </>
    
  );
};

export default LandingPage;