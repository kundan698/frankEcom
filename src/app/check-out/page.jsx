'use client'
import axios from 'axios'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
    let [paymentType,setPaymentType] = useState(1)
    let [shippingData,setshippingData] = useState({
        username:'',
        address:'',
        phone:''
    })
    let userInfo = (event)=>{
        let obj ={...shippingData};
        let inputName=event.target.name;
        let inputValue = event.target.value;
        obj[inputName]=inputValue
        setshippingData(obj)
    }
    let [shippingcharge,setshippingcharge] = useState(100)

    let [total,setTotal]=useState(0)
    let cartData = useSelector((state)=>state.cartReducer.cart)

    /* user Details */
     let token = useSelector((state)=>{
        return state.loginReducer.token

     })
    
    /* closed */
    useEffect(()=>{
      let totalAmount = cartData.reduce((tot,items)=>tot+(items.qty+items.price))
      console.log(totalAmount)
      const totalPrice = cartData.reduce((accumulator,items)=>{
        return accumulator+=(items.qty*items.price)
       
      },0)
      setTotal(totalPrice)
    },[cartData])

    /* form submit */
    let [getorder,setorder]= useState(false)
     let saveOrder = (event)=>{
        event.preventDefault()
        let finalData = {
            cartData,
            shippingData,
            paymentType,
            token,
            total
        }
        axios.post(`http://localhost:8080/website/order/insert`,finalData)
        .then((ress)=>{
           if(ress.status==0){
              toast.error('Oops? Order Failed..')
           }
           else{
             setorder(true)
             toast.success('welcome your Order Placed Successfully..')
           }
        })
        
     }
     /* useEffect(()=>{
        if(getorder){
            redirect('/')
        }
     },[getorder]) */
    /* closed */
    return (
            <div>
            <div className="container mt-5 ">
                <div className="row shadow-lg rounded">
                    <div className="col-lg-6">
                        <div className='p-2'>
                           <p className='mx-4'>Delivery</p>
                           
                           <form action="" onSubmit={saveOrder} className='mx-4 shadow-lg bg-white p-5'>
                           
                           <label htmlFor="" className='blc'>Full Name</label>
                           <input onChange={userInfo} value={shippingData.username} name='username' required type="text" className="form-control mb-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                          
                          
                             <label htmlFor="" className='blc'>Full Address</label>
                            <textarea onChange={userInfo} value={shippingData.address} name='address' required placeholder='Enter your delivery Address..' className="form-control mb-3" aria-label="With textarea"></textarea>
                           
                             <label htmlFor="" className='blc'>Phone Number</label>
                          
                           <input onChange={userInfo} value={shippingData.phone} name='phone' type="text" required className="form-control mb-3" placeholder="Enter your Phone Number" aria-label="Username" aria-describedby="basic-addon1"/>
                           <label htmlFor="" className='text-dark'>Payment Method</label>
                             <div>
                                <div className='d-flex gap-2'>
                                    <input checked={paymentType==1 ? true :''} onChange={(event)=>setPaymentType(event.target.value)} type="radio" value={1} />
                                     <p className='pt-3'>Cash on Delivery</p>
                                </div>
                                <div className='d-flex gap-2'>
                                    <input checked={paymentType==2 ? true:''} onChange={(event)=>setPaymentType(event.target.value)} type="radio" value={2} />
                                     <p className='pt-3'>Razorpay</p>
                                </div>
                             </div>

                             <button type='submit' className='bg-dark text-white w-100 p-2 text-center border-0'>Place Order</button>
                          
                           </form>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className='p-4 orders rounded shadow-lg text-white'>
                            <h5 className='text-white mb-3'>Order Summary</h5>
                            <div>
                                 {cartData.length>=1
                                 ?
                                   cartData.map((items,index)=>{
                                       return(
                                        <div className='d-flex justify-content-between'>
                                        <p className=''><span className=''>{index+1}.</span>{items.pName}</p>
                                        <p>{items.qty}*{items.price}=Rs.{items.qty*items.price}</p>
                                           
                                        </div>
                                       )
                                   })
                                 :
                                 ''
                                 }
                            
                            
                            <div className='d-flex justify-content-between'>
                                <p>ShippingCharge</p>
                                <p>Rs.{shippingcharge}.00</p>
                            </div>
                            
                            <div className='d-flex justify-content-between'>
                                <p>Subtotal</p>
                                <p>Rs.{total}.00</p>
                            </div>
                            
                            <hr />
                            
                           
                            <div className='d-flex justify-content-between'>
                                <p>Total-Amount</p>
                                <p>Rs.{total+shippingcharge}.00</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            </div>
     )
}
