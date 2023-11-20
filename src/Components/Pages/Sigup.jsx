import React, { useState } from "react";
import "../CSS/Sigup.css";
import Logo from "../images/logo.svg";
import {
  BsFillPersonFill,
  BsFillPhoneFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from 'firebase/auth';

// firebase.initializeApp(environment.firebase);

const Sigup = () => {

  const navigate=useNavigate();

  const [values, setValues] = useState({
    name: " ",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmission = () => {
    setSubmitButtonDisable(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      values.email,
      values.phoneNumber,
      values.password
    )
      .then(async(res) => {
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user,{
          displayName:values.name,
        });
        navigate("/")
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        console.log("Error-", err.message);
      });
  };

  return (
    <div className="sigup">
      <div className="sigup-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="sigup-right">
        <form>
          <h3>Sign Up</h3>
          <p>Please fill your information below</p>
          <div className="inputBox">
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              required="requird"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <h6>
              <BsFillPersonFill />
            </h6>
            <span>Name</span>
          </div>
          <div className="inputBox">
            <input
              type="number"
              autoComplete="off"
              name="number"
              id="number"
              required="requird"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  phoneNumber: event.target.value,
                }))
              }
            />
            <h6>
              <BsFillPhoneFill />
            </h6>
            <span>Mobile Number</span>
            {/* {errors.number && touched.number ? (<p className='form-error'>{errors.number}</p>): null } */}
          </div>
          <div className="inputBox">
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              required="requird"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <h6>
              <MdEmail />
            </h6>
            <span>E-mail</span>
          </div>
          <div className="inputBox">
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              required="requird"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
            />
            <h6>
              <MdEmail />
            </h6>
            <span>Password</span>
          </div>
          <button
            className="btn-sigup"
            onClick={handleSubmission}
            disabled={submitButtonDisable}
          >
            <Link to="otp">Sign Up</Link>
          </button>
          <button className="btn-sigup google">
            <i>
              <FcGoogle />
            </i>{" "}
            Sign Up with Google
          </button>
          <div className="line"></div>
          <p className="Already-account">
            Already Have any account, <Link to="login">Sign In</Link>
          </p>
          <div className="links">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sigup;
