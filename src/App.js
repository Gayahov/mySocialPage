
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Posts from "./component/Posts/Posts";
import Profile from "./component/Profile/Profile";
import Register from "./component/Register/Register";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home/>} />
            <Route path = "/profile" element = {<Profile/>}/>
          </Routes>
    </div>
  );
}

export default App;
