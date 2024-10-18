'use client'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeQty, removeCart } from '../slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function page() {
  
  let cartData = useSelector((state)=>state.cartReducer.cart)
  console.log('cart-details',cartData)
  return (
    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
         
          <div className="card-body">
           
           {/*  <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
               
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Remove item">
                 Remove
                </button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark text-white btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                  Wishlist
                </button>
                
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
               
                <div className="d-flex gap-3 mb-4" >
                  <button className='btn btn-dark text-white h-25'><FaMinus /></button>

                  <div data-mdb-input-init className="form-outline">
                    <input id="form1" min={1} max={5} defaultValue={1} name="quantity"  type="number" className="form-control" />
                    <label className="form-label" for="form1">Quantity</label>
                  </div>

                  <button className='btn btn-dark text-white h-25'><FaPlus /></button>
                </div>
               
                <p className="text-start text-md-center">
                  <strong>Price: $17.99</strong>
                </p>
              
              </div>
            </div> */}
            {cartData.length>=1
            ?
            cartData.map((items)=>{
              return(
                <div>
                 <ProductDetails pItems = {items}/>
                 <hr className="my-4" />
                </div>
              )
            })
            :
            'please wait'
            }
           
            
          </div>
        </div>
        <ToastContainer />
       
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

           <Link href={'/check-out'}>
           <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
function ProductDetails({pItems}){
  let [qty,setqty] = useState(pItems.qty)
  let dispatch = useDispatch()
  let delData = ()=>{
   if(window.confirm('Are you sure wants to remove this product..? Click Ok else Cancel')){
     dispatch(removeCart({pid:pItems.pId}))
     toast.success('Product Removed Successfully..!')
   }
   

  }
  useEffect(()=>{
     dispatch(changeQty({pid:pItems.pId,qty}))
  },[qty])
  return(
    <div className="row">
    <div className="col-lg-3 col-md-12 mb-5 mb-lg-0">
    
      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
        <img src={pItems.productImage}
          className="w-100 rounded" alt="Blue Jeans Jacket" />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
     
    </div>

    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
      
      <p><strong>{pItems.pName}</strong></p>
      <p> <b className='text-danger'>Description</b>:{
        pItems.pDec
        }</p>
      <p>Size: M</p>
      <button  onClick={delData} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm me-1 mb-2" data-mdb-tooltip-init
        title="Remove item">
       Remove
      </button>
      <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark text-white btn-sm mb-2" data-mdb-tooltip-init
        title="Move to the wish list">
        Wishlist
      </button>
      
    </div>

    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
     
      <div className="d-flex gap-3 mb-4" >
        <button className='btn btn-dark text-white h-25' onClick={()=>{
          if(qty>1){
            setqty(qty-1)
          }
        }}><FaMinus /></button>

        <div data-mdb-input-init className="form-outline">
          <input id="form1" min={1} max={5} value={qty} name="quantity"   className="form-control" />
          <label className="form-label" for="form1">Quantity{pItems.qty}</label>
        </div>

        <button className='btn btn-dark text-white h-25' onClick={()=>{
          if(qty<5){
             setqty(qty+1)
          }
        }}><FaPlus /></button>
      </div>
     
      <p className="text-start text-md-center">
        <strong>Price:Rs-{pItems.price}</strong>
      </p>
      <p className="text-start text-md-center">
        <strong>Total:Rs-{ qty*pItems.price}</strong>
      </p>
    
    </div>
  </div>
  )
}
