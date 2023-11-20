import React from "react";
import '../Design/DesignElement.css'
import ImageCard from '../ImageCard/ImageCard'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom'



const DesginElement = () => {
  return (
    <>
 
        <div className="Design-element container">
          <div className="side-bar">
            <div className="side-bar-title">
              <h3>Browes By Categary</h3>
               <SearchOutlinedIcon/>
            </div>
            <div className="side-bar-div">
              <div className="side-bar-manu">
                <Link href="iewnf">Header (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iyewbjkf">Footer (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iyubwekjfd">Pricing table (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="uiefd">FaQ (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iugnf">Feature (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iuef">Testimonial (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iu34tef">Stats (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iukjgfnd">Dawnload App (10)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="hebkjfnd">Video (12)</Link>
              </div>
              <div className="side-bar-manu">
                <Link href="iehrjknf">Side-bar (10)</Link>
              </div>
            </div>
          </div>
          <div className=" landing-page-Design">
            <div className="Design-element-navbar">
              <div className="tital">
                <h2>Design Element</h2>
              </div>
              <div className="DesginElement-nav-button">
                <button className="active1">
                 <DashboardCustomizeOutlinedIcon className="nav-icon"/> ALL
                </button>
                <button>
                  <ArticleOutlinedIcon className="nav-icon"/> Website
                </button>
                <button>
                 <DesktopWindowsOutlinedIcon className="nav-icon"/>  Saas
                </button>
                <button>
                 <SendToMobileOutlinedIcon className="nav-icon"/> Mobile
                </button>
              </div>
            </div>
            <div className="button-navbar">
              <button className="active1  btn-navbar">
                Desktop (Width:1920)px
              </button>
              <button className="btn-navbar">Laptop (Width:1440)px</button>
              <button className="btn-navbar">Tablet (Width:720)px</button>
              <button className="btn-navbar">Mobile (Width:390)px</button>
            </div>
            <div className="img-component">
              <div className="img-component-1">
                <ImageCard />
              </div>
              <div className="img-component-2">
                <ImageCard />
              </div>
              <div className="img-component-1">
                <ImageCard />
              </div>
              <div className="img-component-2">
                <ImageCard />
              </div>
              <div className="img-component-1">
                <ImageCard />
              </div>
              <div className="img-component-2">
                <ImageCard />
              </div>
            </div>
          </div>
        </div>
        
    </>
  );
};

export default DesginElement;