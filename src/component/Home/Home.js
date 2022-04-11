import Registr from "../Register/Register";
import Login from "../Login/Login"
import "./Home.css";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import MainCarousel from "../MainCarousel/MainCarousel";
import Header from "../../layout/Header/Header";

export default function Home (){
    return (
        <div className="main">
            {/* <Header/> */}
           <MainCarousel/>
        <div><Posts/></div>
        </div>
    )
}