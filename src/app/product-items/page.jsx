 /* "use client"
import React from 'react'
import Header from '../common/Header'
import { MdOutlineWindow } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import Accordion from '../ProductItemComp/Accordion';
import BasicExample from '../ProductItemComp/Accordion';
import { CiHeart } from "react-icons/ci";
import Carousel3 from '../carouselfolder/Carousel3';
import Link from 'next/link';




export default function page() {
  return (
    <div>

       <section className='container-fluid animate__animated animate__backInUp'>
        <div className='d-flex justify-content-between'>
             <div>
                <p className='text-decoration-underline'>Home / Women</p>
                 <h5 className='brd'>New In</h5>
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
       <section className='container-fluid animate__animated animate__backInUp' id='cr'>
       <Carousel3/>
         <div className="container">
          <div className="col-12">
         
          </div>
         </div>

       </section>
       <section className='container-fluid mt-4'>
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
           <div className="col-lg-9" id='last'>
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
                     <Link href={'/product-details'} className='text-decoration-none text-dark'>
                     <img src="https://www.frankandoak.com/cdn/shop/files/2120533-017.02_450x.jpg?v=1721834478" alt="" className='img-fluid' title='The linen tank tank of green'/>
                     </Link>
                       
                       
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
                     <Link href={'/product-details'} className='text-decoration-none text-dark'>
                     <img src="https://www.frankandoak.com/cdn/shop/files/2120442-580.02_450x.jpg?v=1718224654" alt="" className='img-fluid' title='The linen tank tank of green'/>
                     </Link>
                        
                        
                       
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
                     <Link href={'/product-details'} className='text-decoration-none text-dark'>
                     <img src="https://www.frankandoak.com/cdn/shop/files/2821025-508.duo_450x.jpg?v=1719516486" alt="" className='img-fluid' title='The linen tank tank of green'/>
                     </Link>
                       
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120471-5HR.02_450x.jpg?v=1718224041" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120471-5HR.02_450x.jpg?v=1718224041" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210578-1AA.02_450x.jpg?v=1722279758" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110366-8FX.02_450x.jpg?v=1722882850" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510544-4LT.02_450x.jpg?v=1722276246" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210579-5JR.02_450x.jpg?v=1721141676" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110366-017.02_450x.jpg?v=1722284420" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110365-017.02_450x.jpg?v=1722882477" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510545-012.02_450x.jpg?v=1722449652" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2110368-2AY.02_450x.jpg?v=1722883474" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210502-5AR.02_450x.jpg?v=1722885550" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120487-2KW.02_450x.jpg?v=1718220396" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120463-017.02_8aaac0aa-073e-4b00-a4b3-04fbe75f66a0_450x.jpg?v=1722886414" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2310173-5JR.02_450x.jpg?v=1721145183" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120391-2KU.02_3ac4c2d6-8f41-4ba4-b123-495b8806fd9b_450x.jpg?v=1718225373" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2310170-1AA.02_450x.jpg?v=1722278597" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2210501-2AY.02_450x.jpg?v=1722885092" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2120391-408.02_6f76821b-0d7f-440e-a87d-64a0cb663742_450x.jpg?v=1718373269" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
                        <img src="https://www.frankandoak.com/cdn/shop/files/2510547-2AY.02_450x.jpg?v=1722275809" alt="" className='img-fluid' title='The linen tank tank of green'/>
                       
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
} */
