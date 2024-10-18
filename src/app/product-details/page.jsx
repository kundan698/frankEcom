'use client'
import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { TfiGift } from "react-icons/tfi";
import { GiBrokenHeartZone } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { FaArrowRotateRight } from "react-icons/fa6";
import AllCollapseExample from '../Accordion2';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import axios from 'axios';


export default function ProductDetails() {
    let [getsize,setSize] = useState([])
    let SizeData =()=>{
        axios.get(`http://localhost:8080/website/home/view-size`)
        .then((ress)=>{
            return ress.data
        })
        .then((finalRess)=>{
            if(finalRess.status==1){
              setSize(finalRess.data)
            }
        })
    }
    useEffect(()=>{
          SizeData()
    },[])
  return (
    <div>
       <section className='container-fluid animate__animated animate__backInUp'>
        
            <div className="row">
                <div className="col-lg-4 mt-5">
                    <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.01_1200x.jpg?v=1721834478" alt="" className='img-fluid'/>
                    </div>
                    <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.03_1200x.jpg?v=1721834478" alt="" className='img-fluid mt-4'/>
                    </div>
                    <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.00_1200x.jpg?v=1721834479" alt="" className='img-fluid mt-4' />
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                     <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.02_1200x.jpg?v=1721834478" alt="" className='img-fluid'/>

                    </div>
                    <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.04_1200x.jpg?v=1721834478" alt="" className='img-fluid mt-4' />
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                
                    
                    <div className='d-flex text-decoration-underline pointer text-secondary'>
                       <p>Home /</p>
                       <p>Women /</p>
                       <p>New In</p>

                    </div>
                    <div className='news2'>
                        <p className='news1'>New</p>
                        <h3>The Contrast Stitch Loose T-Shirt in White</h3>
                        <p>$59.50</p>
                        <p>4 interest-free payments of $14.87 with Klarna. <a href="">Learn More</a></p>


                    </div>
                    <div className='d-flex border-bottom text-info fs-4'>
                        <p><CiStar  className=''/></p>
                        <p><CiStar /></p>
                        <p><CiStar /></p>
                        <p><CiStar /></p>
                        <p><CiStar /></p>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <p>Select Size</p>
                        <a href="" className='text-dark'>Sizing Guide</a>
                           
                    </div>
                    <div className='d-flex gap-2 hvs'>
                        {getsize.length>=1 ?
                           getsize.map((items)=>{
                            return(
                                <p className='border p-2'>{items.AddSize}</p>
                            )
                           })
                        :
                        'please wait..'
                        }
                        
                        
                    </div>
                    <div className='d-flex gap-3 mt-4'>
                        <button className=' text-white text-center p-3 to'>Select a Size </button>
                        <button className='border-2 ci'><CiHeart  /></button>
                    </div>
                    <div className='d-flex justify-content-between p-2 gifs mt-3'>
                       <div className='d-flex gap-3'>
                       <FaGift  className='mt-3'/>
                       <p>Frank Rewards <br /> <span>Join to earn 59 points from this item</span></p>
                       </div>
                       <div className='pop2'>
                          <p className='mt-3 fs-5'><CiCircleInfo /></p>
                          <div className='pops1 border-bottom-1'>
                             <div className='text-white p-2 mx-3 mt-2'>
                                <p>Better living begins with better <br /> rewards.</p>
                                
                             </div>
                             <div className='d-flex gap-3 text-white p-1 mx-3'>
                             <TfiGift  className='fs-5 mt-1'/>
                             <p>Earn points for every $1 spent</p>
                             </div>
                             <div className='d-flex gap-3 text-white p-1 mx-3'>
                             <GiBrokenHeartZone  className='fs-5 mt-1'/>
                             <p>Enjoy exclusive benefits</p>
                             </div>
                             <div className='d-flex gap-3 text-white p-1 mx-3'>
                             <MdStars   className='fs-5 mt-1'/>
                             <p>Make a positive impact</p>
                             </div>
                             <button className='d-table mx-auto border-0 p-2 text-success'>Find out more and join for free</button>
                          </div>
                         

                       </div>
                      
                
                    </div>
                   <div className='d-flex mt-4 justify-content-between'>
                   <div className='d-flex gap-3'>
                   <FiTruck  className='mt-1 fs-5'/>
                   <p>Free Shipping over $99</p>

                   </div>
                   <div className='d-flex gap-3'>
                   <FaArrowRotateRight className='mt-1 fs-5'/>
                   <p>Free Returns</p>

                   </div>

                   </div>

                   <div className='mt-2 fb1'>
                    <p>Overview</p>
                    <p className='fs-7 an'>An effortless design to elevate the everyday. Crafted from organic cotton, the boxy T-shirt features an ample fit and a thick fabric with a sleek look and feel. Dropped shoulders. Wide sleeves. Classic crewneck. Long length. Black contrast topstitches.</p>
                   </div>

                   <div className='mt-5'>
                    <AllCollapseExample/>
                   </div>
                   <div>
                    <p className='mt-3 p-3'>Get the look</p>
                    <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
               {/*  <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div> */}
                     <div className='titl'>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2210532-4HB.01_450x.jpg.webp?v=1710772990" alt="" className='' title='The linen tank tank of green ' />
                       
                       </div>
                        <div className='cont d-flex  w-100 fb1'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        {/* <p><CiHeart  className='ikons'/></p> */}
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                   </div>

                </div>
            </div>
       

       </section>
       <section className='container-fluid mt-5'>
        <div className="row">
        <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110721-578.02_450x.jpg?v=1715788324" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2210558-2AC.02_450x.jpg?v=1716399122" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120487-5HR.02_2c5f9d6d-a2c3-4b5b-b824-4768be12aba2_450x.jpg?v=1718220161" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2120478-017.02_206c47b4-8e57-4e1f-9fce-3cdb6b092f9c_450x.jpg?v=1722886653" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2210558-2AC.02_450x.jpg?v=1716399122" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120442-580.02_450x.jpg?v=1718224654" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110377-012.02_450x.jpg?v=1722283940" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
                <div className="col-lg-3 size">
            <div className="new">New</div>
                <div className=''>
                <div className="pop">
                    <div className='d-flex gap-4  p-2 mx-3'>
                        <p>XXS</p>
                        <p>XS</p>
                        <p>L</p>
                        <p>S</p>
                    </div>
                    <p className='text-center'>XL</p>
                </div>
                     <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110365-2LC.02_450x.jpg?v=1722275291" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
                       </div>
                        <div className='cont d-flex justify-content-between'>
                        <p>The Contrast Strich Loose T-shirt in white</p>
                        <p><CiHeart  className='ikon'/></p>
             
                     </div>
                     <div className='sec d-flex'>
                     <p className='mx-2'>$59.50</p>
                       <p className='text-secondary'>1Hours</p>
                      
                     </div>
                     <p className='rds'></p>

                    

                </div>

                </div>
        </div>

       </section>
    </div>
  )
}
