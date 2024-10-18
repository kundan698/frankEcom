"use client"
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

import { MdOutlineWindow } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";


import { CiHeart } from "react-icons/ci";
/* import Carousel3 from '../carouselfolder/Carousel3'; */
import Link from 'next/link';

import { useParams } from 'next/navigation';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { AccordionProduct } from '@/app/ProductItemComp/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '@/app/slice/cartSlice';
import Carousel3 from '@/app/carouselfolder/Carousel3';

export default function page() {
  let [getsubCat, setSubCat] = useState([])
  let [path, setPath] = useState('')
  let [getProduct, setProduct] = useState([])
  console.log(getProduct)

  let [getSize, setSize] = useState([])

  let getSizeData = () => {
    axios.get(`http://localhost:8080/website/home/view-size`)
      .then((ress) => {
        return ress.data
      })
      .then((FinalRess) => {
        if (FinalRess.status == 1) {
          setSize(FinalRess.data)

        }

      })

  }
  useEffect(() => {
    getSizeData()

  }, [])
  /* searching programming */
  let [getSearch,setSearch] = useState(null)
    let searchData = (event)=>{
        event.preventDefault()
        let obj ={
           pName:event.target.pName.value
        }
        setSearch(obj)
    }


  /* searching programming closed */
  let { Slug } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/website/home/view-product/${Slug}`,{params:getSearch})
      .then((ress) => {
        return ress.data
      })
      .then((finalRess) => {
        if (finalRess.status == 1) {
          setSubCat(finalRess.subdata)
          setProduct(finalRess.productModal)
          setPath(finalRess.path)
         

        }
      })
  }, [Slug,getSearch])

  

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
         <form action="" onSubmit={searchData} className='d-flex justify-content-end mb-4'>
          <input name='pName' type="text" className='w-50'/>
          <button type='submit' className='bg-dark text-white border-0 p-2 text-center'>Search</button>
         </form>
        <div className="row">
          <div className="col-lg-3" id='accor'>

            <AccordionProduct/>


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
            <div className="row gap-5">
              {getProduct.length>=1 ?
                getProduct.map((items)=>{
                  return(
                    <ProductItem items = {items} path = {path}/>
                  )
                })
              :
              'please wait..'
              }

            </div>
          </div>
        </div>

      </section>
      <ToastContainer />
    </div>
  )
}
function ProductItem({items,path}){
  
  let cartData = useSelector((state)=>state.cartReducer.cart)
 
    let dispatch = useDispatch()
  let addCart = () =>{
    let obj ={
      qty:1,
      pDec:items.productShortDecription
      ,
      productImage:path+items.productImage,
      price:items.productPrice,
      pName:items.ProductName,
      pId:items._id,
      
    }
    console.log('add -cart details',obj)
    dispatch(addToCart(obj))
    toast.success('your items add in cart.')

  }
  let checkItems = cartData.filter((reduxItems)=> reduxItems.pId==items._id)
  console.log('myData',cartData)
   
   return(
    <div className="col-lg-3 bg-white p-2  hovercompo rounded-3">
    <div className='position-relative abcd'>
    <div className='bg-dark text-white p-1 position-absolute abc'>new</div>
    <Link href={`/cart-detail`}>
    <img src={path+items.productImage} alt="" className='w-100' title={items.ProductName}/>
    </Link>
    
    </div>
    <p className='text-danger'>{items.ProductName}</p>
    <p className=''>{items.productDecription}</p>
   {/*  <p className='ffs'>37% off</p> */}
   
    <div className='d-flex justify-content-between'>
     <p className='bg-success text-white'>Rs.{items.productPrice}</p>
     <div className='d-flex startxt'>
     <p><FaStar /></p>
     <p><FaStar /></p>
     <p><FaStar /></p>
     <p><FaStar /></p>
     <p><FaStarHalfStroke /></p>
     </div>
    </div>


    {checkItems.length==1 
    ?
     <button type='button' onClick={()=>dispatch(removeCart({pid:items._id}))} className='bg-danger p-1 rounded text-center text-white border-0 w-100'>Remove Cart</button>
     :
     <button type='button' onClick={addCart} className='bg-dark p-1 rounded text-center text-white border-0 w-100'>Add Cart</button>
    }
    
    
   </div>
   )
}
