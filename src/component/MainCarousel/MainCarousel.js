import "./MainCarousel.css"
import React, { Component } from "react";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainCarousel () {
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      pauseOnHover: true
    }
    return (
      <div className="carousel">
        <h2> Discover MyBlog</h2>
        <Slider {...settings}>
          <div>
          <img src={require("../../assets/2.png")}></img>
          </div>
          <div>
          <img src={require("../../assets/1.png")}></img>
          </div>
          <div>
          <img src={require("../../assets/3.png")}></img>
          </div>
          <div>
          <img src={require("../../assets/4.png")}></img>
          </div>
        </Slider>
      </div>
    );
  }
