'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import axios from "axios";

function Carousel2({getslider,path}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
   
  };
  
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {getslider.map((items)=>{
            return(
              <div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="d-flex">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p className="fs-8 mx-1">Based on 111 reviews</p>
                  </div>
                  <div className="mt-5">
                      <h5>Very flattering cut, comfortable fabric and nice details. Wish I had bought a few of these.</h5>
                      <p className="text-secondary">AMY h.</p>
                      <a className="text-decoration-underline text-dark">Shop Now</a>
  
                  </div>
  
                </div>
                <div className="col-lg-3">
                  <div className="">
                  <img src={path+items.SliderImage} alt="" className='img-fluid' />
                      
                  </div>
  
                </div>
                <div className="col-lg-3">
                  <div className="d-flex">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p className="fs-8 mx-1">Based on 111 reviews</p>
                  </div>
                  <div className="mt-5">
                      <h5>Very flattering cut, comfortable fabric and nice details. Wish I had bought a few of these.</h5>
                      <p className="text-secondary">AMY h.</p>
                      <a className="text-decoration-underline text-dark">Shop Now</a>
  
                  </div>
  
                </div>
                <div className="col-lg-3">
                  <div className="">
                  <img src="https://www.frankandoak.com/cdn/shop/files/1110470-6AY.01.jpg?crop=center&height=880&v=1714401695&width=672" alt="" className='img-fluid' />
                      
                  </div>
  
                </div>
  
              </div>
              </div>
            )
          })}
        </Slider>
    </div>
  );
}

export default Carousel2;
