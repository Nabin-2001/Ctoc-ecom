import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Categry.css'
import { Usercontext } from '../../App'
import { Link } from 'react-router-dom'
const Categrypro = () => {
  const { name, setname } = useContext(Usercontext)
  const [categry, setcategry] = useState([])
  const items = JSON.parse(localStorage.getItem('brand'));
 
  useEffect(() => {
    
    async function getstoredata() {
      const response = await axios.get(`http://16.170.252.94:8000/api/products/?search=${name.length > 0 ? name : "shoes" || "shoes" && "mobiles"}`);
      setcategry(response.data)
    }
    getstoredata()
  },[name])

  return (
    <div>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-md-2' id='categry'>
            <div className='d-flex'>
              <span className='filter'>Filter</span>
              <span className='reset'>RESET</span>
            </div>
            <hr></hr>
            <div>
              <h6>Price Range</h6>
              <input type="range" className="form-range" id="customRange1"  />
            </div>
            <hr></hr>
            <div className='categry'>
              <p>Category</p>
              <div><input value="samsung" onChange={(e) => setname(e.target.value)} type="checkbox" className='mb-2' />mobile</div>
              <div><input type="checkbox" className='mb-2' />Grocery</div>
              <div><input value="shirt" type="checkbox" onChange={(e) => setname(e.target.value)} className='mb-2' />Fashion</div>
              <div><input value="samsung" onChange={(e) => setname(e.target.value)} type="checkbox" className='mb-2' />Electronics</div>
              <div><input type="checkbox" className='mb-2' />Home</div>
              <div><input type="checkbox" className='mb-2' />Personal Care</div>
              <div><input type="checkbox" className='mb-2' />Appliances</div>
              <div><input type="checkbox" className='mb-2' />Children Product</div>
              <div><input type="checkbox" className='mb-2' />Furniture</div>
              <div><input type="checkbox" className='mb-2' />Sports</div>
              <div><input type="checkbox" className='mb-2' />Nuitrition</div>
            </div>
            <hr></hr>
            <div className='color'>
              <p>Color</p>
              <div><input value="Grey" onChange={(e) => setname(e.target.value)} type="checkbox" className='mb-2' />Grey</div>
              <div><input type="checkbox" className='mb-2' />White</div>
              <div><input type="checkbox" className='mb-2' />Yellow</div>
              <div><input type="checkbox" className='mb-2' />Orange</div>
              <div><input type="checkbox" className='mb-2' />Purple</div>
              <div><input type="checkbox" className='mb-2' />Red</div>
              <div><input type="checkbox" className='mb-2' />Pink</div>
              <div><input type="checkbox" className='mb-2' />Brown</div>
              <div><input type="checkbox" className='mb-2' />Green</div>
              
              <div><input type="checkbox" className='mb-2' />Black</div>
            </div>

          </div>
          <div className='col-md-8 ms-5 my-4'>

            <div className='row'>
              <div className='container-fluid'>
                <div className='row'>
                  {
                    categry.map((item) => {
                      return  (
                        <Link style={{textDecoration:"none" ,color:"black"}} to={`/productDetails/${item.id}`}  target = "_blank">
                        <div className="  mb-3" >
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img src={item.product_images[0].image} style={{ width: "200px" }} />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h4 className="card-title">{item.product_title}</h4>
                                <p className="card-text" style={{fontWeight:"500"}}>{item.description}</p>
                                
                                <div>
                                            <span
                                                className='text-center'
                                                id='actual_price'>
                                                &#8377;
                                                {item.actual_price}
                                            </span>
                                            <span
                                                id="selling_price">
                                                &#8377;
                                                {item.selling_price}
                                            </span>
                                            <span className='Discount'>
                                                ({100 - Math.round(item.selling_price * 100 / item.actual_price)}% OFF)
                                            </span>
                                        </div>
                              </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categrypro
