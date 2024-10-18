import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <div>
        <section className='container-fluid bgs p-3 mt-5'>
            <div className="container">

                <div className="row">
                    <div className="col-lg-3">
                        <div className='text-white text-center mn'>
                           <img src="https://www.frankandoak.com/cdn/shop/files/Shipping-black_2_40x.png?v=1657555435" alt="" />
                           <h5>Free Shipping</h5>
                           <p>On orders over $99.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='text-white text-center mn'>
                           <img src="https://www.frankandoak.com/cdn/shop/files/Returns-black_6defe504-0961-4e6b-9c71-70f44686eaa1_40x.png?v=1668024666" alt="" />
                           <h5>Free Returns</h5>
                           <p>Only keep what you love.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='text-white text-center mn'>
                           <img src="https://www.frankandoak.com/cdn/shop/files/loyalty_logo_light_40x.png?v=1672328644" alt="" />
                           <h5>Frank Rewards</h5>
                           <p>Earn points and get rewards.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='text-white text-center mn'>
                           <img src="https://www.frankandoak.com/cdn/shop/files/Sezzle_40x.png?v=1704401097" alt="" />
                           <h5>Buy Now, Pay Later</h5>
                           <p>Select Klarna at checkout.
                           </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSin74ZRyT11sni1bQTFKeE0WLcDMir1GMukAuDDRk0wZSBqz0U" alt=""  className='w-50'/>
                        </div>
                        <div className='d-flex text-white gap-3 fs-5 mt-3'>
                            <p><CiInstagram /></p>
                            <p><RiFacebookLine /></p>
                            <p><LuTwitter /></p>
                            <p><MdOutlineMail /></p>
                            <p><TiSocialLinkedin /></p>
                          
                        </div>
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2IQFUWqwLFI4JG92t9xrtt-SH3v8ewvRkdkdviZy3wA1exUYx" alt="" className='w-25'/>
                    </div>
                    <div className="col-lg-2">
                        <div className='text-white info'>
                            <h5>Our Story</h5>
                            <p>Who we are</p>
                            <p>Sustainable practices</p>
                            <p>design Idiology</p>
                            <p>Fabric</p>
                            <p>Circular denim</p>
                            <p>Partners factories</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    <div className='text-white info'>
                            <h5>Discover</h5>
                            <p>Gifts cards</p>
                            <p>frank rewards</p>
                            <p>Give $15, Get $ 20</p>
                            <p>Affiliate</p>
                            <p>Blog</p>
                            <p>Work with us</p>
                            <p>Our stores</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    <div className='text-white info'>
                            <h5>Customer Care</h5>
                            <p>Shipping Information</p>
                            <p>Returns & exchanges</p>
                            <p>Coupon codes</p>
                            <p>FAQ</p>
                            <p>Terms & Conditions</p>
                            <p>Refund Policy</p>
                            <p>Accessibility</p>
                            <p>Customer Data Request</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='infos text-white'>
                            <h5>Stay in touch</h5>
                            <p>Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.</p>

                        </div>
                        <form action="" className='fst'>
                            <input type="text" placeholder='Email' className='w-100 p-2 bg-transparent'/>
                            <input type="text" placeholder='First name' className='w-100 p-2 bg-transparent mt-3'/>
                            <div className='text-white mt-3 inp d-flex gap-2'>
                                <label htmlFor="">I shop for</label>
                                <input type="radio"  className='bg-transparent mx-2'/>
                                <label htmlFor="">Women</label>
                                <input type="radio" />
                                <label htmlFor="">Men</label>
                                <input type="radio" />
                                <label htmlFor="">All</label>
                                <input type="radio" />
                            </div>
                            <button className='bg-transparent sub'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='frank'>
                <p>© Frank And Oak 2024 , All Rights Reserved.</p>
               </div>
            </div>

           

        </section>
    </div>
  )
}
