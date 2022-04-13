// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";


// import "./Header.css";

// export default function Header() {
  
//   const [showLogReg, setShowLogReg] = useState(false)
 
//   return (
//     <>
//       <div className="navBar">
//       {/* <div className="log-reg-div" >
//           <ul className="login-reg">
          
          
//           </ul>
//         </div> */}
//           <div className="navBar-child">
//         <div className="logo">Welocome to My Blog</div>
        
//         </div>

//         <div >
//           <ul className="menu">
//             <li > <Link to="/home">Home</Link></li>
//             <li >My Favorite Posts</li>
//             <li><Link to= "/profile">My Profile</Link></li>
//             <li id="test" ><Link to='/login'>SignIn/SignUp</Link></li>
//           {/* <li><Link to='/register'> Register</Link></li> */}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";


import "./Header.css";

export default function Header() {
  
  // const [showLogReg, setShowLogReg] = useState(false)
 
  return (
    <>
      <div className="navBar">
     
          <div className="navBar-child">
        <div className="logo">Let's Traveling</div>
        
        </div>

        <div >
          <ul className="menu">
            <li > <Link to="/home">Home</Link></li>
            <li ><Link to = '/fav'>My Favorite Posts</Link></li>
            <li><Link to= "/profile">My Profile</Link></li>
          
          {/* <li><Link to='/register'> Register</Link></li> */}
          </ul>
        </div>
        <div> <ul><li id="test" ><Link to='/login'>SignIn/SignUp</Link></li></ul> </div>
      </div>
    </>
  );
}

