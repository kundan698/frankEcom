'use client'
import Image from "next/image";
import styles from "./page.module.css";
import SimpleSlider from "./carouselfolder/Carousel1";
import Modal from "./modal/Modal";
import { useEffect, useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Responsive from "./carouselfolder/Carousel1";
import { FaStar } from "react-icons/fa";
import Carousel2 from "./carouselfolder/Carousel2";
import Carousel5 from "./carouselfolder/Carousel5";
import axios from "axios";






export default function Main() {
  let [getcat,setcat]=useState([])
  let [getimage,setimage] = useState('')
    let viewCategory= ()=>{
        axios.get(`http://localhost:8080/website/category/view`)
        .then((ress)=>{
          return ress.data
        })
        .then((finalRess)=>{
           if(finalRess.status==1){
             setcat(finalRess.data)
             setimage(finalRess.path)
           }
        })

    }
    let [getslider,setslider] = useState([])
  let [path,setPath] = useState([])

  let viewSlider = ()=>{
     axios.get(`http://localhost:8080/admin/slider/view`)
     .then((ress)=>{
       return ress.data
     })
     .then((finalRess)=>{
       if(finalRess.status==1){
           setslider(finalRess.data)
           setPath(finalRess.path)
       }
     })
  }
   /* view sub cat data programming */
   let [getSub,setSub] = useState([])
   let [pathImage,setpathImage] = useState('')
      let viewSubCat = ()=>{
         axios.get(`http://localhost:8080/website/category/view-sub`)
         .then((ress)=>{
          return ress.data
         })
         .then((finalRess)=>{
          if(finalRess.status==1){
            setSub(finalRess.data)
            setpathImage(finalRess.path)
          }
         })
      }
   /* closed */
    useEffect(()=>{
       viewCategory()
       viewSlider()
       viewSubCat()
    },[])

  return (
      <>
        
       
      <section className="container-fluid text-black ww">
        
        <Carousel5 />
        
        </section>

        <section className="container-fluid sale ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                 <div className="men">
                  <h1>The <br/>Stockroom Sale</h1>
                  <button>Women</button>
                  <button>Men</button>
                 </div>
              </div>

              <div className="col-lg-6">
                 <div>
                 <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Stockroom_sale_homepage.gif?v=1721933454" alt="" className='img-fluid' />
                 </div>
              </div>
             

            </div>

          </div>

        </section>
        <section className="container-fluid bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                 <div className="text-white d-flex align-content-center wths gap-2">
                 <p><FaTruckMoving className="font"/></p>
                 <p>Free Shipping over $99</p>
                 </div>
              </div>
              <div className="col-lg-3">
                 <div className="text-white d-flex align-content-center wths gap-2">
                 <p><LuRotateCcw className="font"/></p>
                 <p>Free Returns</p>
                 </div>
              </div>
              <div className="col-lg-3">
                 <div className="text-white d-flex align-content-center wths gap-2">
                 <p><GoGift  className="font"/></p>
                 <p>Earn Points</p>
                 </div>
              </div>
              <div className="col-lg-3">
                 <div className="text-white d-flex align-content-center wths gap-2">
                 <p><MdOutlineTimer  className="font"/></p>
                 <p>Buy Now, Pay Later</p>
                 </div>
              </div>

            </div>

          </div>

        </section>
        <section className="container-fluid mt-5">
           <h5 className="p-2 fe">Featured Categories</h5>
            
              <div className="row gap-5 ">
                   {getcat.length>=1 ?
                     getcat.map((items)=>{
                       return(
                        <div className="col-lg-2 shadow-lg position-relative rounded-2">
                           <div className="position-absolute tex h-3  text-center w-25 ">
                           <p className="">New</p>
                     </div>
                    <div className="dre">
                    
                    <img src={getimage+items.CategoryImage} alt="" className='w-100' />
                    <p>{items.CategoryName}</p>
                    <p>{items.CategoryDec}</p>
                    </div>
                    </div>
                       )
                     })
                    :
                    'please wait..'
                   }

              </div>

         

        </section>
        <section className="container-fluid my-5 scrolls">
         
            <h2 className="p-2 stok">The Stockroom Sale — Incomparable prices, from our warehouse   to you.</h2>
          <div className="row gap-2">
            
                <Responsive getSub = {getSub} pathImage={pathImage}/>
              
          

          </div>
          
        </section>
        <section className="container-fluid cls" id="from">
          <h3 className="text-center p-3">You didn’t hear it from us</h3>
          <div className="container">
           <Carousel2 getslider ={getslider} path ={path}/>
           

          </div>

        </section>
        <section className="container-fluid mt-5">
          <div className="container">
            <div className="row">
                 <div className="col-lg-6">
                     <div className="better">
                      <h1>Inspire Better Living.</h1>
                      <h3>Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.</h3>
                      <h5>Who we are</h5>

                     </div>
                 </div>
                 <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6 position-relative">
                        <div className="hh">
                        <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" alt="" className='img-fluid' />
                        <div>
                          <p className="text-white position-absolute bottom-0 text-white fs-5">Sustanable Practices</p>
                        </div>
                        </div>

                      </div>
                      <div className="col-lg-6  position-relative">
                        <div>
                          <p className="position-absolute bottom-0 text-white fs-5">Design Philosphy</p>
                       <div>
                         
                        </div>
                          <img src="https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804" alt="" className='img-fluid' />
                         
                       </div>
                      

                      </div>

                      <div className="col-lg-6 hh mt-3 position-relative">
                        <div>
                          <p className="position-absolute bottom-0 text-white fs-5">Design Philosphy</p>
                       <div>
                         
                        </div>
                          <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263" alt="" className='img-fluid' />
                         
                       </div>
                      

                      </div>
                      <div className="col-lg-6  position-relative mt-3">
                        <div>
                          <p className="position-absolute bottom-0 text-white fs-5">Design Philosphy</p>
                       <div>
                         
                        </div>
                          <img src="https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804" alt="" className='img-fluid' />
                         
                       </div>
                      

                      </div>

                    </div>
                 </div>
            </div>

          </div>

        </section>

      </>
  );
}


