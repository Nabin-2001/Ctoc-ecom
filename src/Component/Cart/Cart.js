import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../../App'
import './Cart.css'
const url = "http://16.170.252.94:8000";
const Cart = () => {
    const url = "http://16.170.252.94:8000";
    const { cart,setcart } = useContext(Usercontext)
      const[dcart,sdcart]=useState({})
    
   
   console.log("d cart data",dcart)
 
     function getstoredata() {
       axios.get(`http://16.170.252.94:8000/api/get-users-cart/${JSON.parse(localStorage.getItem('uid'))}/`)
        .then((res)=>{
           setcart(res.data.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }

    const deletecart = (item) =>{
      console.log("item data",item.id)
        axios.delete(`http://16.170.252.94:8000/api/delete-cart/${item.id}/`)
        .then(()=>{
          getstoredata()
        })
    }    
         useEffect(()=>{
             getstoredata()
         },[])
    return (
        <div>
        
            <div className='container my-3 ' >
                <div className='row'>
                 
                  {
                    cart.map((item)=>{
                        return(
                            <div className='d-flex'>
                            <div className='col-md-3' style={{width:"200px"}}>
                            <img src={url+item.product.thumbnail} style={{width:"12rem"}} />
                            </div>
                            <div className='col-md-7'>
                             <p>{item.product.description}</p>
                             <button className='btn btn-danger' onClick={()=>deletecart(item)}>delete cart</button>
                            </div>
                            
                            </div>
                        )
                    })
                  }
                </div>
            </div>
        </div>
    )
}

export default Cart
