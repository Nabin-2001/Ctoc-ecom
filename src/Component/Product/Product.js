import React, { useContext, useEffect } from 'react'
import { Usercontext } from '../../App';
import './Product.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const url = "http://16.170.252.94:8000";

const Product = () => {
    const navigate = useNavigate()

    const { value, setvalue, data, setdata,obj,setobj } = useContext(Usercontext)
   
    useEffect(() => {
        axios.get("http://16.170.252.94:8000/api/all-products/")
            .then((res) => {
                setvalue(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])

    const datashare = (item) => {
        setdata(item)
      
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        value.data && value.data.map((item, index) => {
                            return (
                                <Link style={{textDecoration:"none"}} to={`/productDetails/${item.id}`}  target = "_blank" className='col-md-3' key={item.id}>
                                    <div className='sub_flex' style={{ textDecoration: "none", color: "black" }}>
                                        <div className="card" id='card' onClick={(e) => datashare(item)} style={{ marginBottom: "10px" }} >
                                            <img src={url + item.product_images[0].image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className='text-center' id='title'>{item.product_title}</h5>
                                                <span className='text-center' id='actual_price'>&#8377;{item.actual_price}</span>
                                                <span id="selling_price">&#8377;{item.selling_price}</span>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Product
