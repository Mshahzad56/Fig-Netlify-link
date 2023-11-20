import React from "react";
import "../CSS/Admin.css";
import Saidbar from "./Saidbar";
import Search  from "../Pages/Search";
import Searchuser from "./Searchuser";

const Adminpenal = () => {


  return (
    <>
      <div className="adminpenal-main">
        <div className="said-bar">
          <Saidbar />
        </div>
        <div className="right-said">
          <Search/>
          
          
          <div className="dashboard">
            <div className="analytics">
              <div className="topbox">
                <h2>Analytics</h2>
                <div className="selectbox">
                  <p>today</p>
                </div>
              </div>
              
              <div className="selectbox">
                  <div className="box">
                    <p>Import</p>
                    <div className="price">
                      <p className="profit">896K</p>
                      <p className="plas">+8.78%</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="balance">

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Adminpenal;
