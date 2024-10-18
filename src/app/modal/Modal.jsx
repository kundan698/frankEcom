 'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaFileImage } from "react-icons/fa";
import axios from 'axios';
import { MdDomainVerification } from "react-icons/md";

export default function Modal({change,set}) {
    let[gets,sets]=useState(false)
    let myfunc =(e)=>{
        e.preventDefault()
        sets(!gets)
    }
    /* insert Programming start */
    /* OTP Program */
    let [registerOTP,setregisterOTP]  = useState(false)
    /* OTP Program Closed */
     let [registerData,setRegisterData] = useState({
        UserName:'',
        email:'',
        password:'',
        profile:'',
        otp:''

     })
     
     let changeVelue = (event)=>{
        let obj ={...registerData}
        obj[event.target.name] = event.target.value
        setRegisterData(obj)
     }
      let[load,setload] = useState([])
      let [getotp,setotp] = useState(false)
     let UserData = (event)=>{
        
         event.preventDefault()
        
         axios.post(`http://localhost:8080/website/register/insert`,registerData)
         .then((ress)=>{
           setregisterOTP(true)
           setload(true)

         })
       
     }
    /* insert programming closed */
    let verifyOTP = (event) =>{
        event.preventDefault()
        axios.post(`http://localhost:8080/website/register/veryfy-otp`,registerData)
        .then((ress)=>{
          
           console.log(ress.data)
           
        })
    }

    
  return (
    <>
     <div className='overlay'onClick={()=>set(!change)} >

    </div>
    <div className='popup'>
        <section className='container-fluid'>
            <div className='text-center p-3 mt-4 bgs-primary'>
                <h4>Welcome Back</h4>
                <p>Log in to get access to your member perks.</p>

               <div className="row">
                <div className="col-lg-4 fn">
                     <div className='text-center'>
                        <p><CiHeart id='ht'/></p>
                         <b>Frank Rewards</b>
                         <p>Earn points. Get rewarded.</p>
                     </div>
                </div>
                <div className="col-lg-4">
                <div className='text-center fn'>
                        <p><CiHeart id='ht'/></p>
                         <b>Wishlist</b>
                         <p>Save your favourites</p>
                     </div>
                </div>
                <div className="col-lg-4 fn">
                <div className='text-center'>
                        <p><CiHeart id='ht'/></p>
                         <b>Early access</b>
                         <p>Exclusive sale perks</p>
                     </div>
                </div>
               </div>
            </div>
            <div>
                
            </div>
            <div className="container">
                <div className='mt-3'>
                    {registerOTP ?
                    <form onSubmit={verifyOTP} action="" className="searchs shadow-lg w-75 mx-auto p-5 rounded-4">
                    <InputGroup className="mb-3 locks rounded-3">
                     <InputGroup.Text id="basic-addon1" className='bg-dark'><MdDomainVerification  className='fs'/></InputGroup.Text>
                     <Form.Control
                    placeholder="Enter your OTP"
                    aria-label="Username"
                   
                    aria-describedby="basic-addon1" value={registerData.otp} onChange={changeVelue} name='otp'/>
                                                   
                   </InputGroup>
                   
                       
                        {/* <input type={gets ? 'password' : 'text'}  placeholder='password'/>
                        <button onClick={myfunc} className=''>
                            {gets ? 'Show': 'Hide'}
                        </button> */}
                        <button type='submit' id='log'>Verify OTP</button>
                    </form>
                     :
                     <form onSubmit={UserData} action="" className="searchs shadow-lg w-75 mx-auto p-5 rounded-4">
                     <InputGroup className="mb-3 locks rounded-3">
                      <InputGroup.Text id="basic-addon1" className='bg-dark'><CiUser  className='fs'/></InputGroup.Text>
                      <Form.Control
                     placeholder="Username"
                     aria-label="Username"
                     onChange={changeVelue}
                     aria-describedby="basic-addon1" name='username'/>
                                                    
                    </InputGroup>
                     <InputGroup className="mb-3 locks rounded-3">
                      <InputGroup.Text id="basic-addon1" className='bg-dark'><MdOutlineMail className='fs' /></InputGroup.Text>
                      <Form.Control
                     placeholder="Email"
                     aria-label="Username"
                     onChange={changeVelue}
                     aria-describedby="basic-addon1" name='email' class='locks'/>
                                                    
                    </InputGroup>
                     
                     <InputGroup className="mb-3 locks rounded-3 ">
                      <InputGroup.Text id="basic-addon1" className='bg-dark'><CiLock className='fs' /></InputGroup.Text>
                      <Form.Control
                     placeholder="password"
                     aria-label="Username"
                     onChange={changeVelue}
                     aria-describedby="basic-addon1" name='password'/>
                                                    
                    </InputGroup>
                    <InputGroup className="mb-3 locks rounded-3  p-2">
                      <InputGroup.Text id="basic-addon1" className='bg-dark'><FaFileImage className='fs'/></InputGroup.Text>
                      <Form.Control
                     placeholder="password"
                     type='file'
                     aria-label="Username"
                     onChange={changeVelue}
                     aria-describedby="basic-addon1" name='profile'/>
                                                    
                    </InputGroup>
                    
                        
                         {/* <input type={gets ? 'password' : 'text'}  placeholder='password'/>
                         <button onClick={myfunc} className=''>
                             {gets ? 'Show': 'Hide'}
                         </button> */}
                         
                          
                          
                           <button type='submit' id='log'>SignUp</button>
                         


                         
                     </form>
                    }
                      
                    
                </div>
                <div className="row">
                    <div className="col-lg-5 ">
                        <div className='border-bottom mt-3 p-2 '>

                        </div>
                    </div>
                    <div className="col-lg-2 mt-3 p-2">
                        <p className='text-center'>Social login</p>
                    </div>
                    <div className="col-lg-5">
                    <div className='border-bottom  mt-3 p-2'>

                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className=' with d-flex '>
                           
                            <button className=''> <FaFacebookF  className='text-primary'/>SignIn with Facebook </button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className='with flex'>
                       
                        <button className=''>  <IoLogoGoogle />Login with Google</button>
                        </div>
                    </div>
                   
                    <div className="row">
                    <div className="col-lg-4">
                        <div className='border-bottom mt-3 p-2'>

                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-2 text-decoration-underline text-primary ">
                        <p className='text-center'>Create an Account?</p>
                    </div>
                    <div className="col-lg-4">
                    <div className='border-bottom  mt-3 p-2'>

                      </div>
                    </div>
                </div>
                <b className='text-center have'>Don't have an account <a className='p-1 text-primary' >Sign Up <FaArrowRightLong /></a></b>
                </div>
            </div>

        </section>

    </div>
    </>
   
   
  )
}
