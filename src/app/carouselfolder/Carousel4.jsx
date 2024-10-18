"use client"
import React, { useContext } from "react";
import Slider from "react-slick";
import { ContextCount } from "../UseContext/UseContext";
import Link from "next/link";



function Carousel4() {
  
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
         <div className='d-flex rel '>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110700-628.01_450x.jpg?v=1711391664" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.145 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1'>Add to Cart</Link>
                 </div>

                  
                </div>
         </div>
        </div>
        <div>
         <div>
         <div className='d-flex rel'>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110721-578.01_450x.jpg?v=1715788324" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.128 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1' >Add to Cart</Link>
                 
                 </div>

                  
                </div>
               
         </div>
        </div>
        <div>
         <div>
         <div className='d-flex rel'>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510534-3DB.01_450x.jpg?v=1717441411" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.158 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1'>Add to Cart</Link>
                 </div>

                  
                </div>
         </div>
        </div>
        <div>
          <div>
          <div className='d-flex rel'>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310161-2KY-01_450x.jpg?v=1707861316" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.198 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1'>Add to Cart</Link>
                 </div>

                  
                </div>
          </div>
        </div>
        <div>
         <div>
         <div className='d-flex rel'>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://www.frankandoak.com/cdn/shop/files/2110327-012.02_450x.jpg?v=1707619426" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.198 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                 
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1'>Add to Cart</Link>
                 
                 </div>

                  
                </div>
         </div>
        </div>
        <div>
         <div>
         <div className='d-flex rel'>
                  <div className="rel1">59% off</div>
                  <div>
                  <img src="https://www.frankandoak.com/cdn/shop/files/2410187-556.8909_450x.jpg?v=1690990008" alt="" className='w-75'/>
                  </div>
                 
                 <div className='flx'>
                 <p>The double Cloth shirts in Tuscany green</p>
                  <select name="" id="" className='p-2'>
                  <option value="">Select a size</option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">L</option>
                  <option value="">S</option>
                  </select>
                  <p className="pt-3">Rs.198 <span className="text-decoration-line-through text-white p-2 bg-success mt-3">Rs.399</span></p>
                 
                  <Link href={'/product-details'} className='mt-3 text-decoration-none text-dark border-3 bdr1'>Add to Cart</Link>
                 
                 </div>

                  
                </div>
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel4;
