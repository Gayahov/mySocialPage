import React, { useState, useRef } from "react";
import Login from "../../component/Login/Login";
import { Link } from "react-router-dom";
import Register from "../../component/Register/Register";

import "./Header.css";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openReg, setOpenReg] = useState(false);
  const accountContentRef = useRef();

  // const loginRegisterHandler = (content) => () => {
  //   setOpenReg(content);
  //   accountContentRef.current = content;
  //   if (content === accountContentRef.current) {
  //     setOpenLogin(!openLogin);
  //   }
  //   if (content !== openReg) {
  //     setOpenLogin(true);
  //   }
  // };
  return (
    <>
      <div className="navBar">
      <div className="log-reg-div" >
          <ul className="login-reg">
          <li ><Link to='/login'>Login /</Link></li>
          <li><Link to='/register'> Register</Link></li>
          
          </ul>
        </div>
          <div className="navBar-child">
        <div className="logo">Welocome to My Blog</div>
        
        </div>

        <div >
          <ul className="menu">
            <li >Home </li>
            <li >My Posts</li>
            <li >My Favorite Posts</li>
            <li >My Profile</li>
          </ul>
        </div>
      </div>
      <div className="log_reg">
      {/* {openLogin ? (
        openReg === "login" ? (
          <>
            <Login />
          </>
        ) : openReg === "register" ? (
          <>
            <Register />
          </>
        ) : null
      ) : null} */}
      </div>
    </>
  );
}
