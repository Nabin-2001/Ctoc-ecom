import React, { useContext, useEffect } from 'react'
import { Usercontext } from '../../App';
import './Product.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const url = "http://16.170.252.94:8000";


const Product = () => {
    const { name, setname } = useContext(Usercontext)
    console.log(name)
    const navigate = useNavigate()
    const { value, setvalue, data, setdata,obj,setobj } = useContext(Usercontext)
    useEffect(() => {
        axios.get(`http://16.170.252.94:8000/api/all-products/`)
            .then((res) => {
                setvalue(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])

    const datashare = (item) => {
       setname(item.product_title)
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        value.data && value.data.map((item) => {
                            return (
                               <div className='col-md-2 col-sm-2 me-4 mb-5' key={item.id}>
                                       <div>
                                   <Link to={`/categry`} target="_blank" >
                                  <div className="card rounded-pill" id='card' onClick={(e) => datashare(item)}  >
                                          <div>
                                          <img  src={url + item.category.category_image} className="card-img-top img-fluid " alt="..." />
                                          </div>
                                  </div>
                                  </Link> 
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

export default Product
