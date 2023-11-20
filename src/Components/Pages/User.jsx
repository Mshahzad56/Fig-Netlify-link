import React from 'react';
import "../CSS/User.css";
import Figma from "../images/figma.png";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { MdReport } from "react-icons/md";

const User = (props) => {
  return (
    <>
      <div className="maincontainer">
        <div className="backgroundimg">
          <img src={props.img} alt="backgroundImage" />
        </div>
        <div className="buttons">
          <button className="copy"><p>Copy</p> <img src={Figma} alt="figmaLogo" /></button>
          <button className="download">Download <BsFileEarmarkArrowDown /></button>
          <button className="report">Report <MdReport /></button>
        </div>
      </div>
    </>
  )
}

export default User