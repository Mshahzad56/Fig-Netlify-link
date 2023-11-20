import React from 'react';
import Logo from "../images/logo.svg";
import { BsFillPhoneFill,BsInstagram ,BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import { Link} from 'react-router-dom';

const OtpCode = () => {
  return (
    <div className='sigup'>
    <div className="sigup-left">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="sigup-right">
      <form action="">
        <h3>OTP</h3>
        <p>Please Enter  the OTP</p>
        <h5 className='otp-btn'>***</h5>
        <p className='otp-para'>Enter the verification code we send to <br />Aliyanbaig.up@gmail.com</p>
        <div className="inputBox">
          <input type="number" required="requird"/>
          <h6><BsFillPhoneFill/></h6>
          <span>OTP</span>
        </div>
        <button type='submit' className='btn-sigup'><Link to="adminpenal">Verify</Link></button>
        <p className='Already-account'>Already Have any account, <Link to="/login">Sign In</Link></p>
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

export default OtpCode