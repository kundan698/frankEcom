import React from "react";
import Slider from "react-slick";

function Carousel5() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
         <p className=" text-center text-black pt-2">
        These prices come once in a lifetime.  <a className="decoration-underline text-black ">Shop Women's Stockroom Sale Shop Men's Stockroom sale</a>
        </p>
         </div>
        </div>
        <div>
         <div>
         <p className=" text-center text-black pt-2">
         Just in: New organic cotton pieces for effortless looks. Shop Women Shop Men 
        </p>
         </div>
        </div>
        <div>
         <div>
         <p className=" text-center text-black pt-2">
         Enjoy free shipping on orders over $99 and free returns
        </p>
         </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel5;
