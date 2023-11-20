import React from "react";
import "./UserProfile.css";
import ImageCard from '../ImageCard/ImageCard.js';
import img5 from "../Images/div.avatar-wrap.png";
import img6 from '../Images/Call.png';
import img7 from "../Images/Message.png";
import img8 from "../Images/Skype.png";
import img9 from "../Images/Telegram.png";
import img10 from "../Images/Booking.png";
import Header from "../Navbar/Header.js";

const UserProfile = () => {
  return (
    <><Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-3 pt-4">
          <div className="user-id">
            <img src={img5} alt="" />
            <h2>Aliyan Baig</h2>
            <div className="user-id-followers">
              <div className="user-followers">
                <h5>220K</h5>
                <p>Followers</p>
              </div>
              <div className="user-followers">
                <h5>516</h5>
                <p>posts</p>
              </div>
              <div className="user-followers">
                <h5>197</h5>
                <p>Followind</p>
              </div>
            </div>
            <div className="user-button">
              <button className="btn-1">Hire Me</button>
              <button className="btn-2">Follow Me</button>
            </div>
            <div className="user-taxt">
              <h3>Jenna Davis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus rem iste sequi fugiat veniam! Quasi repellendus
                voluptate optio accusantium voluptates.
              </p>
              <a href="http://">Friendkit.co/JennaDavis</a>
            </div>
            <div className="contact-button">
            <a href="" className="btn-3" > <img src={img6} alt="#" /> +1 (543) 355 876</a>
            <a href="" className="btn-3" > <img src={img7} alt="#" /> Info@design.com</a>
            <a href="" className="btn-3" > <img src={img8} alt="#" /> Lorem 43</a>
            <a href="" className="btn-3" > <img src={img9} alt="#" /> Lorem 67</a>
            <a href="" className="btn-3" > <img src={img10} alt="#" /> Book a metting</a>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row pt-4">
            <div className="col-md-6">
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
            </div>
            <div className="col-md-6">
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfile;