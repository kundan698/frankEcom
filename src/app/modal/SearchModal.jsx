import React, { useEffect, useState } from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import Carousel6 from '../carouselfolder/Carousel6';
import axios from 'axios';

export default function SearchModal({update,setUpdate}) {
    let [getsub,setSub]=useState([])
    let [path,setPath] = useState('')
    let subData = ()=>{
         axios.get(`http://localhost:8080/website/category/view-sub`,{params:getSearch})
         .then((ress)=>{
            return ress.data
         })
         .then((finalRess)=>{
           if(finalRess.status==1){
             setSub(finalRess.data)
             setPath(finalRess.path)
           }
         })
    }
    /* searching programming start.. */
    let [getSearch,setSearch] = useState(null)
      let Search = (event)=>{
        event.preventDefault()
           let obj ={
             subname:event.target.subname.value
           }
           setSearch(obj)
           console.log(obj)
      }
    /* searching progrmming closed */
    useEffect(()=>{
      subData()
    },[getSearch])
  return (
    <>
    <div className="overlay1" onClick={()=> setUpdate(!update)}></div>
    <div className="popup1">
        <div>
            <form action="" onSubmit={Search} className='formBox'>
                <input name='subname' type="text" placeholder='Search'/>
                <button type='submit'><MdArrowRightAlt /></button>
            </form>
            <section className='container-fluid animate__animated animate__backInUp'>
               
                    <div className="row">
                        <div className="col-lg-3">
                            <h5 className='p-2'>Trending Searches</h5>
                            <div className='d-flex gap-2 shrt1 flex-lg-wrap'>
                                <p className=' p-2'>T-shirts</p>
                                <p className=' p-2'>Denim</p>
                                <p className=' p-2'>Shorts</p> <br />
                                <p className=' p-2'>Dresses</p>
                                <p className=' p-2'>Linen</p>
                                
                            </div>
                            <Carousel6/>
                        </div>
                        <div className="col-lg-9">
                            <h5 className='p-2'>Trending Products</h5>
                            <div className="row gap-5">
                            {getsub.length>=1 ?
                              getsub.map((items)=>{
                                return(
                                    <div className="col-lg-3 shadow-lg">
                                    <div>
                                        <img src={path+items.SubImage} alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p>{items.SubCategoryName}</p>
                                        <p className='p-1'>{items.SubDec}</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                )
                              })
                            :
                            'please wait..'
                            }
                               
                                {/* <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110721-578.01_900x.jpg?v=1715788324" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110700-628.01_900x.jpg?v=1711391664" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510534-3DB.01_900x.jpg?v=1717441411" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1110721-4BV.01_900x.jpg?v=1715788360" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2210568-5AN.01_900x.jpg?v=1711400535" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110351-4AC.01_900x.jpg?v=1715116317" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310161-2KY-01_900x.jpg?v=1707861316" alt="" className='img-fluid' />
                                    </div>
                                    <div className='the'>
                                        <p className='p-1'>The stevie Tapered denim short in Light wash</p>
                                       <div className='d-flex gap-3'>
                                       <p className='text-decoration-line-through'>$89.50  </p>
                                       <p className='text-danger'>25.00</p>
                                       </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                           
                           
                           
                            
                        
                    </div>
               

            </section>
        </div>
    </div>
    </>
  )
}
