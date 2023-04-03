import React, { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../../App'
import './ProductDetails.css'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProductDetails = () => {
    const [api, setapi] = useState([])
    const { id } = useParams()
    console.log("params", id)
    const { data, setdata, obj, setobj, cart, setcart } = useContext(Usercontext)
    console.log(data)
    const cartitem = (data) => {
        setcart([...cart, data])
    }
   
    useEffect(()=>{
        <Navbar />
    },[])
    useEffect(() => {
        async function getstoredata() {
            const response = await axios.get(`http://16.170.252.94:8000/api/particulat-product-details/${id}/`);
            setapi(response.data.data)
        }
        getstoredata()
    }, [id])
    console.log(api)
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        api.map((item, index) => {
                            return (
                                <div className='d-flex my-1 p-5'>
                                    <div className='col-md-2 '>
                                      <div className='d-grid grid-four-column' id="product_image" >
                                      <img src={"http://16.170.252.94:8000" + item.product_images[1].image}   />
                                        <img src={"http://16.170.252.94:8000" + item.product_images[0].image}  />
                                      </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <img src={"http://16.170.252.94:8000" + item.product_images[0].image} style={{ width: "400px" }} />
                                    </div>
                                    <div className='col-md-5    '>
                                        <h1 className='mb-3'>{item.product_title}</h1>
                                        <span id='desc' className='mb-2'>{item.description}</span>
                                        <div>
                                            <span className='text-center' id='actual_price'>&#8377;{item.actual_price}</span>
                                            <span id="selling_price">&#8377;{item.selling_price}</span>
                                            <span className='Discount'>({100 - Math.round(item.selling_price * 100 / item.actual_price)}% OFF)</span>
                                        </div>
                                        <button className='btn btn-primary my-3' onClick={() => cartitem(data)}><RiShoppingCart2Fill style={{ padding: "5px", fontSize: "30px" }} /> ADD TO CART</button>
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

export default ProductDetails
