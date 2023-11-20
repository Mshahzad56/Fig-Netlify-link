import React, {useState} from 'react';
import {  BsFillPhoneFill,BsInstagram ,BsTwitter} from "react-icons/bs";
import {BiSolidLock} from "react-icons/bi";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.svg";

const Login = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("API", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setPassword("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured") ;
      }
    } catch (error) {
      console.log(error);
    }
    alert(message);
  };



  return (
    <div className='sigup'>
    <div className="sigup-left">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="sigup-right">
      <form onSubmit={handleSubmit}>
        <h3>LogIn</h3>
        <p>Please fill your information below</p>
        <div className="inputBox">
          <input type="email" required="requird" value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          <h6><BsFillPhoneFill/></h6>
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="password" required="requird" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
          <h6><BiSolidLock/></h6>
          <span>Password</span>
        </div>
        <button className='btn-sigup' type="submit"><Link to="adminpenal">Login</Link></button>
        <button className='btn-sigup google'><i><FcGoogle/></i> Sign Up with Google</button>
        <div className='line'></div>
        <p className='Already-account'>Don't Have Any Account, <Link to="/">Sign Up</Link></p>
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

export default Login