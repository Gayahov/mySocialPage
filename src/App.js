
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Posts from "./component/Posts/Posts";
import AuthorPage from "./component/AuthorPage/AuthorPage";
import Profile from "./component/Profile/Profile";
import Register from "./component/Register/Register";
import Header from "./layout/Header/Header";
import FavoritePost from "./component/FavoritePosts/FavoritePost";

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
            <Route path = "/fav" element = {<FavoritePost/>}/>
            <Route path = "/author/:id" element = {<AuthorPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
