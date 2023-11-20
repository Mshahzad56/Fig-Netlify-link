import React from "react";
import Usercom from "./Usercom";
import User from "./User";
import Header from "../../Navbar/Header";

const Userprofile = () => {
  function Users(val) {
    return <User key={val.id} img={val.img} />;
  }

  return (
    <>
    <Header/>
      <div className="mapcontainer">
        {/* {Usercom.map(Users)} */}
        {Usercom.map((user) => Users(user))}
      </div>
    </>
  );
};

export default Userprofile;
