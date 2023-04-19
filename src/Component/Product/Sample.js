import React from 'react'

const Sample = () => {
  return (
    <div>
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
    </div>
  )
}

export default Sample
