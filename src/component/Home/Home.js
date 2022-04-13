import Registr from "../Register/Register";
import Login from "../Login/Login";
import "./Home.css";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import MainCarousel from "../MainCarousel/MainCarousel";
import Header from "../../layout/Header/Header";
import AddPosts from "../AddPosts/AddPosts";
import SearchPosts from "../SearchPosts/SearchPosts";

export default function Home() {
  return (
    <div className="main">
      {/* <Header/> */}
      <MainCarousel />
      <AddPosts />
      <SearchPosts/>
      <div>
        <Posts
          favorite={"all  posts"}
          endpoint={"api/v1/post/?limit=10&offset=0"}
        />
      </div>
    </div>
  );
}
