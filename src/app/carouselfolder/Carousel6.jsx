import React from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";

function Carousel6() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        <div>
               <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://www.frankandoak.com/cdn/shop/files/1110378-229.01.jpg?crop=center&height=880&v=1715195739&width=672" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120479-002.02_450x.jpg?v=1713380164" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da_900x.jpg?v=1713375346" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510534-3DB.01_900x.jpg?v=1717441411" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510534-3DB.01_900x.jpg?v=1717441411" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110356-5EF.02_450x.jpg?v=1717431628" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120487-017.02_450x.jpg?v=1714658702" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510516-2KW.02_450x.jpg?v=1711049870" alt="" className='w-100'  title="the linen Tank top in green"/>
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
        <div>
        <div className="dk">
              <div className="bg-dark dk1 m-2">
                <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120470-002.02_450x.jpg?v=1712939658" alt="" className='w-100'  title="the linen Tank top in green"/>
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
       
      </Slider>
    </div>
  );
}

export default Carousel6;


 
            
              
              
             
              
              
              
                