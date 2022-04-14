

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


import "./Header.css";

export default function Header() {
  
  const [color, setColor] = useState(false);
  const navEl = useRef();
  //change nav color when scrolling
  const changeColor = () => {
    navEl.current.focus();
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

 
  return (
    <>
      <div  ref={navEl} className={color ? "header header-bg" : "header"}>
     
          <div className="navBar-child">
        <div className="logo"><Link to="/home">Let's Travel</Link></div>
        
        </div>

        <div >
          <ul className="menu">
            <li > <Link to="/home">Home</Link></li>
            <li ><Link to = '/fav'>My Favorite Posts</Link></li>
            <li><Link to= "/profile">My Profile</Link></li>
          </ul>
        </div>
        <div id="loginId" className="log_reg"> <ul><li id="test" ><Link to='/login'>Sign In</Link></li></ul> </div>
      </div>
    </>
  );
}

