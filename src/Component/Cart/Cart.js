import React, { useContext } from 'react'
import { Usercontext } from '../../App'
import './Cart.css'
const Cart = () => {
    const url = "http://16.170.252.94:8000";
    const { cart } = useContext(Usercontext)
    console.log(cart)
    return (
        <div  >
            <div className='container my-3'>
                <div className='row'>
                    {
                        cart.map((item) => {
                            return (
                                <div>
                                    <div class="card mb-3" style={{ maxWidth: "300px" ,height:"200px"}}>
                                        <div class="row g-2">
                                            <div class="col-md-4">
                                                <img className='my-5 img-fluid rounded-start' src={url + item.product_images[0].image} style={{ width: "100px" }} />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body ">
                                                    <h5 class="card-title" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.product_title}</h5>
                                                    <p class="card-text" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.description} </p>
                                                    <p id="C_selling_price">&#8377;{item.selling_price}</p> 
                                                </div>
                                            </div>
                                        </div>
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
