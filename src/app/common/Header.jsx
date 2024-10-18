'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import Modal from '../modal/Modal';
import { CiUnlock } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";


import SearchModal from '../modal/SearchModal';
import { MdArrowRightAlt } from "react-icons/md";
import Link from 'next/link';

/* import Button from 'react-bootstrap/Button'; */
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel4 from '../carouselfolder/Carousel4';
/* import { ContextCount } from '../UseContext/UseContext'; */
import LoginModal from '../modal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { logOutSlice } from '../slice/LoginSlice';
import axios from 'axios';


export default function Header() {
   /* cart data fetching program */
   let cartData = useSelector((state)=>state.cartReducer.cart)
    console.log(cartData)
   /* cart data fetch program closed */
  let [getUser,setUSer] = useState([])
  let viewUSer =()=>{
     axios.get(`http://localhost:8080/website/register/view`)
     .then((ress)=>{
      return ress.data
     })
     .then((finalRess)=>{
       if(finalRess.status==1){
        setUSer(finalRess.data)
       }
     })
  }

  let [Getcategory,Setcategory] = useState([])
  let Parentcategory=()=>{
    
      axios.get(`http://localhost:8080/website/home/view-category`)
      .then((ress)=>{
        return ress.data
      })
      .then((finalRess)=>{
         if(finalRess.status==1){
           Setcategory(finalRess.data)
         }
      })
  }
  useEffect(()=>{
    Parentcategory()
    viewUSer()
  },[])
  let dispatch = useDispatch()
/*   let{Count,setCount}=useContext(ContextCount) */
       let [change,set]=useState(false)
       let [update,setUpdate] = useState(false)
       const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   let Data = ()=>{
      set(!change)
   }
   let fire = ()=>{
       setUpdate(!update)
   }
   /* login State */
   let [login,setLogin] = useState(false)
   let loginFunc = ()=>{
     setLogin(!login)
   }
    let token = useSelector((store)=>{
        return store.loginReducer.token
    })
    
  return (
    <>
    
    {/* cart modal */}
    {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      {login ?  <LoginModal login={login} setLogin={setLogin}/> :''}
    

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Continue Shopping <MdArrowRightAlt /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id='cart'>
          <section className='container-fluid animate__animated animate__backInUp'>
            <div className="container">
                <div className='text-white  para1'>
                <p>For a limited time only— Shop The Stockroom Sale today.</p>
                </div>
                <h5 className='bg1'>Most popular right now</h5>


                <Carousel4/>
               
            </div>
            <div className='d-flex justify-content-between p-2 bgs2 mt-3'>
              <h5>Subtotal() Items</h5>
             <h5>$0.00</h5>
            </div>
             <Link href={'check-out'}>
             <button className='bg-secondary p-2 mt-3 w-100 border-0 text-white rounded-2'>Secure CheckOut <CiUnlock  className='fonts1'/></button>
             </Link>
             <div>
              <img src="https://icons8.com/preloaders/preloaders/135/%D0%9A%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B0.gif" alt="" />
             </div>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    {/* cart modal */}
     
    
     
      {change ? <Modal change={change} set={set}/> : ""}
      {update ? <SearchModal update={update} setUpdate={setUpdate}/> : ""}
    
     
   
    
     <nav className="navbar navbar-expand-lg stck ">
  <div className="container-fluid menu-Item ">
    <Link href={'/'} className="navbar-brand  ttx"  id='franks' title='Frank & Oak'>Frank And Oak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        



      <ul className=" me-auto mb-2 mb-lg-0  d-flex list-unstyled gap-3 text-white">

        {Getcategory.length>=1 ?
        Getcategory.map((items)=>{
          return(
            <li className="nav-item px-4 text-dark font-bold fs-6 text-white text-uppercase">
            <Link href={`/category/${items.Slug}`} className='text-white text-decoration-none'>{items.CategoryName}</Link>
          </li>
          )
        })
        :
        'Processing....'
        }
        
        
       
      </ul>
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0  menus">
        <li className="nav-item">
          <Link href="/" className="nav-link active " aria-current="page"  title='The Stockrooms Sale'>The Stockrooms Sale
          <div className="menubar">
             <div>
              <div className="row">
                <div className="col-lg-3">
                  <div className='stock'>
                     <h5 title='Womens Stockrooms Sales'>Women's Stockrooms Sales</h5>
                     <p className='pt-2'>Shop All</p>
                     <p>Accessories strarting at $10</p>
                     <p>Top starting at $20</p>
                     <p>Swimwear at $20</p>
                     <p>Bootoms starting at $20</p>
                     <p>Dresses at $40</p>
                     <p>Blazers at 65$</p>
                     <p>Jackets starting at $75</p>
                  </div>
                </div>
                <div className="col-lg-3">
                <div className='stock'>
                     <h5>Men's Stockrooms Sales</h5>
                     <p className='pt-2'>Shop All</p>
                     <p>Accessories strarting at $10</p>
                     <p>Top starting at $20</p>
                     <p>Swimwear at $20</p>
                     <p>Bootoms starting at $20</p>
                     <p>Dresses at $40</p>
                     <p>Blazers at 65$</p>
                     <p>Jackets starting at $75</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className='pr'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_26333b28-40ab-4503-ac5c-a44a204bd029_600x.jpg?v=1716325359" alt="" className='img-fluid'/>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className='pr'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_bc8fefe0-8ef7-4737-8552-08419697fcf6_600x.jpg?v=1716325364" alt="" className='img-fluid'/>
                  </div>
                </div>
              </div>
             </div>
          </div>
          </Link>
          
         
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" title='Women'>Women
            <div className="menubar">
              <div>
                <div className="row">
                  <div className="col-lg-2">
                    <div className='stock'>
                      <h5>Featured</h5>
                      <Link title='New In' href={'/product-items'} className='text-dark text-decoration-none mx-4 in'>New In</Link><br />
                      <Link href={'/best-seller'} className='text-dark text-decoration-none mx-4 in' title='Best Sellers'>Best Sellers</Link>
                      <Link href={'/women-featured'} className='text-dark text-decoration-none mx-4 ins' title='fabric of summer'> fabric of summer</Link>
                      <p title='The originals'>The originals</p>
                      <p title='Work wear'>Work wear</p>
                      <p title='Gift Card'>Gift Cards</p>
                      <p className='text-danger'>Sale</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                  <div className='stock'>
                      <h5 title='Clothing'>Clothing</h5>
                      <p title='Shop All'>Shop All</p>
                      <p >T-shirts & Tops</p>
                      <p>Blouses & shirts</p>
                      <p>Dresses & jumpsuits</p>
                      <p>Skirts & shorts</p>
                      <p>Swimwear</p>
                      <p>Matching sets</p>
                      <p>Sweaters & Cardigians</p>
                      <p>Blazers & Overshirts</p>
                      <p>Denim</p>
                     
                    </div>
                  </div>
                  <div className="col-lg-2">
                  <div className='stock'>
                      <h5>Accessories</h5>
                      <p>Shop All</p>
                      <p>Caps & Hats</p>
                      <p>Shoes & boots</p>
                      <p>Bags</p>
                      
                      
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className='prs'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/SaleMenuTile_WW_1_600x.jpg?v=1718906299" alt="" />
                    </div>
                   
                  </div>
                  <div className="col-lg-3">
                    <div className='prs'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_ea86bb3a-3987-4f5f-a049-f19784dbfa55_600x.jpg?v=1717698790" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" title='Men'>Men
          <div className="menubar">
              <div>
                <div className="row">
                  <div className="col-lg-2">
                    <div className='stock'>
                      <h5>Featured</h5>
                      <p>New In</p>
                      <p>Best Sellers</p>
                      <p>Lines,the fabric of summer</p>
                      <p>The originals</p>
                      <p>Work wear</p>
                      <p>Gift Cards</p>
                      <p className='text-danger'>Sale</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                  <div className='stock'>
                      <h5>Clothing</h5>
                      <p>Shop All</p>
                      <p>T-shirts & Tops</p>
                      <p>Blouses & shirts</p>
                      <p>Dresses & jumpsuits</p>
                      <p>Skirts & shorts</p>
                      <p>Swimwear</p>
                      <p>Matching sets</p>
                      <p>Sweaters & Cardigians</p>
                      <p>Blazers & Overshirts</p>
                      <p>Denim</p>
                     
                    </div>
                  </div>
                  <div className="col-lg-2">
                  <div className='stock'>
                      <h5>Accessories</h5>
                      <p>Shop All</p>
                      <p>Caps & Hats</p>
                      <p>Shoes & boots</p>
                      <p>Bags</p>
                      
                      
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className='prs'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/SaleMenuTile_MW_2_600x.jpg?v=1718906326" alt="" />
                    </div>
                   
                  </div>
                  <div className="col-lg-3">
                    <div className='prs'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/JUNE_MW_SHORTS_1_3_600x.jpg?v=1717604394" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" title='Our Story'>Our Story
            <div className="menubar">
              <div>
                <div className="row">
                  <div className="col-lg-2">
                    <div>
                    <img src="https://www.frankandoak.com/cdn/shop/files/Who_we_are_-_NAV_600x.jpg?v=1712763767" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <img src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_23_600x.jpg?v=1712763780" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <img src="https://www.frankandoak.com/cdn/shop/files/Design_Philosophy_-_NAV_600x.jpg?v=1712763785" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <img src="https://www.frankandoak.com/cdn/shop/files/Fabric_Innovation_-_NAV_600x.jpg?v=1712763794" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <img src="https://www.frankandoak.com/cdn/shop/files/Circular_Process_-_NAV_600x.jpg?v=1712763798" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div>
                      <img src="https://www.frankandoak.com/cdn/shop/files/Partners_Factories_-_NAV_600x.jpg?v=1712763804" alt="" className='img-fluid'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className='nav-item'>
          <Link href={'/user-info'} className='nav-link' title='User Product Details'>
            DashBoard
          </Link>

        </li>
       
       
      </ul> */}
     {/*  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className='icon text-white'>
        <button onClick={fire} title='Search'><CiSearch  className='text-white'/></button>
        <button onClick={Data} title='SignIn'>< FaRegUserCircle  className='text-white'/></button>
        { !token ? <button type='button' onClick={loginFunc} title='Login' className='fs-5 text-white'>Login</button> :
       
        <button type='button'  onClick={()=>dispatch(logOutSlice())} title='LogOut' className='fs-5 text-white'>
          {getUser.map((items)=>items.UserName)}
        </button>
        }
        
        <button onClick={handleShow} title='Add to Cart' className='pos'><FaCartShopping className='text-white' />
           <div className='num' >{cartData.length}</div>
        </button>

      </div>
    </div>
  </div>
</nav>
    </>
  )
}
