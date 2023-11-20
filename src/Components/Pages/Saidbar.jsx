import React from "react";
import Figlogo from "../images/Figlogo.png";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import {
  AiFillDollarCircle,
  AiOutlineFileDone,
  AiFillSetting,
} from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaExclamationCircle, FaPager } from "react-icons/fa";
import user from "../images/user.png";

const Saidbar = () => {
  return (
    <>
      <div className="saidbar-main">
        <img className="logo" src={Figlogo} alt="main-logo" />
        <div className="menu">
          <i className="hamburger">
            <RxHamburgerMenu />
          </i>
          <i className="cross hamburger">
            <RxCross2 />
          </i>
          <ul>
            <li>
              <Link>
                {" "}
                <GoHomeFill /> Home
              </Link>
            </li>
            <li>
              <Link>
                <LuFileText /> Templates
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <BiUserCircle /> Users
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <AiFillDollarCircle /> Subscription
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <FaPager /> Payments
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <FaExclamationCircle /> Reports
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <AiOutlineFileDone /> Approvel <span className="counter">8</span>
              </Link>
            </li>
          </ul>
          <div className="setting">
            <div className="row">
              <img src={user} alt="user-image" />
              <div className="names">
                <p>Sayan Barcha</p>
                <p className="admin-name">Super Admin</p>
              </div>
            </div>
            <i>
              <AiFillSetting />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saidbar;
