   "use client"
import React from 'react'
import { MdOutlineWindow } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import Accordion from '../ProductItemComp/Accordion';
import BasicExample from '../ProductItemComp/Accordion';
import { CiHeart } from "react-icons/ci";


export default function page() {
  return (
    <div>
        <section className='container-fluid'>
        <div className='d-flex justify-content-between'>
             <div>
                <p className='text-decoration-underline'>Home / Women</p>
                 <h5 className='brd'>Best Seller</h5>
            </div>
            <div className='d-flex gap-4'>
               <p className='md'><MdOutlineWindow /></p>
               <p className='md'><FaRegSquare /></p>
                <select name="" id="" className='border-0 p-4'>
                    <option value="">Sort by</option>
                    <option value="">Featured</option>
                    <option value="">Best Selling</option>
                    <option value="">Price,low to high</option>
                    <option value="">Price high, to low</option>
                </select>
            </div>
        </div>
        
           
       

       </section>
       <section className='container-fluid'>
        <div className="row">
            <div className="col-lg-3" id='accor'>
               <BasicExample/>
               <div className='txt'>
                <h5>Featured</h5>
                <p className='text-success'>New In</p>
                <p>Best Sellers</p>
                <p>Linen, The Fabric of summer</p>
                <p>The originals</p>
                <p>Workwear</p>
                <p>Sale</p>
               
               </div>
               <div className='txt'>
                <h5>Clouthing</h5>
                <p className='text-success'>New In</p>
                <p>Best Sellers</p>
                <p>Linen, The Fabric of summer</p>
                <p>The originals</p>
                <p>Workwear</p>
                <p>Sale</p>
               
               </div>
               <div className='txt'>
                <h5>Accessories</h5>
                <p className='text-success'>New In</p>
                <p>Best Sellers</p>
                <p>Linen, The Fabric of summer</p>
                <p>The originals</p>
                <p>Workwear</p>
                <p>Sale</p>
               
               </div>
            </div>
           <div className="col-lg-9">
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/1940085-002.02_450x.jpg?v=1722534365" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/1820161-508.duo_450x.jpg?v=1719516462" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120473-017.02_450x.jpg?v=1706720302" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210413-4CV.9185_450x.jpg?v=1692114730" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110327-012.02_450x.jpg?v=1707619426" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2410186-002.8399_450x.jpg?v=1690989697" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2410187-556.8909_450x.jpg?v=1690990008" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210509-4KW.03_450x.jpg?v=1707772794" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210466-00B.8426_450x.jpg?v=1692114728" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120473-002.02_450x.jpg?v=1709140893" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210507-4CV.8765_450x.jpg?v=1696431679" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120449-5AR.02_450x.jpg?v=1717595122" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120479-366.02_450x.jpg?v=1713380314" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120388-8FU.02_450x.jpg?v=1717432297" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120388-8FU.02_450x.jpg?v=1717432297" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2230117-5AR.02_450x.jpg?v=1718218610" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/0C2A0913_450x.jpg?v=1718131558" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120481-003.02_450x.jpg?v=1717432972" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510516-2KW.02_450x.jpg?v=1711049870" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120479-774.02_450x.jpg?v=1713380367" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210501-229.03_450x.jpg?v=1710425912" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210504-4KW.02_450x.jpg?v=1711113791" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2610056-00E.02_54ef57a6-7fb5-4915-a3c4-f44838d98d02_450x.jpg?v=1713966798" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510536-3AL.02_450x.jpg?v=1715027935" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510542-011.02_450x.jpg?v=1714075804" alt="" className='img-fluid' title='The linen tank ank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120486-8BX.01_450x.jpg?v=1716998450" alt="" className='img-fluid' title='The linen tank ank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110327-012.02_450x.jpg?v=1707619426" alt="" className='img-fluid' title='The linen tank ank of green'/>
                       
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
           </div>
        </div>

       </section>
    </div>
  )
}
