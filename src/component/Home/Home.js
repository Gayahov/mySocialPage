import Registr from "../Register/Register";
import Login from "../Login/Login"
import "./Home.css";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import MainCarousel from "../MainCarousel/MainCarousel";

export default function Home (){
    return (
        <div className="main">
           <MainCarousel/>
        <div><Posts/></div>
        </div>
    )
}