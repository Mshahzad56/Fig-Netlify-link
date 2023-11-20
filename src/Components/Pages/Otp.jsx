import React from 'react';
import {  BsInstagram ,BsTwitter} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.svg";

const Otp = () => {
  return (
    <div className='sigup'>
    <div className="sigup-left">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="sigup-right">
      <form action="">
        <h3>Enter Your email or Phone Number</h3>
        <p>You will receive an email/Sms for resetting your password</p>
        <h5 className='otp-btn'>***</h5>
        <p className='otp-para'>Please provide the email address that you <br />used when you signed up for your account</p>
        <div className="inputBox">
          <input type="email" required="requird"/>
          <h6><MdEmail/></h6>
          <span>Email</span>
        </div>
        <button className='btn-sigup'><Link to="/otpcode">Send OTP</Link></button>
        <p className='Already-account'>Already Have any account, <Link to="login">Sign In</Link></p>
        <div className="links">
          <a href="#"><FaFacebookF/></a>
          <a href="#"><BsInstagram/></a>
          <a href="#"><BsTwitter/></a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Otp