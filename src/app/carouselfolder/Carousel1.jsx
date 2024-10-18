
import React from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";

function Responsive({getSub,pathImage}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed: 2000,
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
        {getSub.map((items)=>{
          return(
            <div>
               <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src={pathImage+items.SubImage} className="w-100"/>
                <div className="whts">
                      <div className="d-flex gap-2 m-2 p-2 para">
                        <p>XXS</p>
                        <p>XS</p>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        
                      </div>
                      <p className="text-center p-2">XL</p>
                </div>
                <div>
                
                 </div>
                 </div>
                 <div className="d-flex justify-content-between p-2 pds">
                   <p>The Linen Tank top in green</p>
                   <CiHeart  className="pd"/>
 
                 </div>
                 <div className="pds d-flex gap-2 mx-2">
                   <p className="text-decoration-line-through">$49.50</p>
                   <p className="text-danger">$20.00</p>
                 </div>
                 <p className="rn">1Colour</p>
 
               </div>
        </div>
          )
        })}
        </Slider>
    </div>
  );
}

export default Responsive;


 
            
              
              
             
              
              
              
                