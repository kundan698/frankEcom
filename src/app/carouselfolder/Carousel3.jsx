import React from "react";
import Slider from "react-slick";

function Carousel3() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div >
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f871c3dec2984ff3.jpeg?q=20" alt="" className="mx-2"/>
         </div>
        </div>
        <div>
        <div className="mx-2">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c71214dd5d01be5c.jpg?q=20" alt="" className="mx-2"/>
         </div>
        </div>
        <div>
        <div className="mx-2">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f871c3dec2984ff3.jpeg?q=20" alt="" className="mx-2"/>
         </div>
        </div>
        <div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a1cb49e265b022a3.jpeg?q=20" alt="" className="mx-2"/>
         </div>
        </div>
       
        
      </Slider>
    </div>
  );
}

export default Carousel3;
