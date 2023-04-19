import React, { useContext, useEffect, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import { Usercontext } from '../../App'
import './ProductDetails.css'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import axios from 'axios';
import { json, useParams } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
const ProductDetails = () => {
    const [api, setapi] = useState([])
    const { id } = useParams()

    const [img, setimg] = useState(["/media/product_images/shirt_vanHuesen_YBABNJX.jpg"])

    const { data, setdata, obj, setobj, cart, setcart } = useContext(Usercontext)
    const [seereview, setseereview] = useState([])
    const handle = (item) => {
        console.log(item.id)
        axios.post("http://16.170.252.94:8000/api/add-to-cart/", {
            product: item.id,
            user: JSON.parse(localStorage.getItem('uid')),
            quantity: 10
        })
            .then((res) => {
                console.log("success data", res)
            })
        localStorage.setItem('mydata', JSON.stringify(item.id))
    }


    useEffect(() => {
        async function getstoredata() {
            const response = await axios.get(`http://16.170.252.94:8000/api/all-products/${id}/`);
            setapi(response.data.data)
        }
        getstoredata()
    }, [id])

    const datashare = (item) => {
        // console.log("datashare data",item)
    }
    const setmark = (item) => {
        console.log("data get", item)
    }
    const setimage = (item) => {
        setimg(item.product_images[1].image)
    }

    const setimages = (item) => {
        setimg(item.product_images[0].image)
    }


    //   review functionlity ********

    const [review, setreview] = useState({
        user: JSON.parse(localStorage.getItem('uid')),
        product: id,
        subject: "",
        description: "",
        textarea: "",
        ratings: ""

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setreview({ ...review, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://16.170.252.94:8000/api/post-review/", review)
            .then((res) => {
                productreview()
            })
            .catch((err) => {
                console.log(err)
            })
    }
     useEffect(()=>{
        productreview()
     })

    function productreview() {
        axios.get(`http://16.170.252.94:8000/api/particular-product-reviews/${id}/`)
            .then((res) => {
                setseereview(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    console.log(seereview)
    return (
        <>
            {
                api ?
                    <div style={{ backgroundColor: "#a5a4a424" }} >
                        <div className='container mb-5 ' id='margin_bottom' style={{ backgroundColor: "#FFF" }} >
                            <div className='row d-flex'>
                                {
                                    api.map((item) => {
                                        return (

                                            <div className='d-flex my-5' key={item.id}  >
                                                <div onLoad={() => setmark(item)}>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-4 my-3'>
                                                            <div className='d-grid grid-four-column' id="product_image"  >
                                                                <img
                                                                    src={"http://16.170.252.94:8000" + item.product_images[1].image}
                                                                    onMouseOver={() => setimage(item)}
                                                                />

                                                                <img
                                                                    src={"http://16.170.252.94:8000" + item.product_images[0].image}
                                                                    onMouseOver={() => setimages(item)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-8 mb-5' id='zoom_img' style={{ width: "350px", height: "400px", cursor: "move" }}>
                                                            <InnerImageZoom style={{ width: "350px", height: "400px", cursor: "move" }}
                                                                src={"http://16.170.252.94:8000" + img}
                                                                zoomSrc={"http://16.170.252.94:8000" + img}
                                                                zoomScale={1.3}
                                                                zoomType="hover"
                                                                fullscreenOnMobile
                                                                moveType='pan'
                                                                fadeDuration={150}
                                                                hideHint={true}
                                                                cursor="move"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <h1 className='mb-3'>{item.product_title}</h1>
                                                    <span id='desc' className='mb-2'>{item.description}</span>
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
                                                    <button className='btn btn-primary my-3' onClick={() => handle(item)}><RiShoppingCart2Fill style={{ padding: "5px", fontSize: "30px" }} /> ADD TO CART</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* Review ********/}
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <input className='form-control'
                                                        type="text"
                                                        name="subject"
                                                        placeholder='Enter your name'
                                                        value={review.subject}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>

                                                <div className='my-2 form-control'>
                                                    <Rating className='form-control w-100'
                                                        name="ratings"
                                                        required
                                                        value={review.ratings}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>

                                                <div className='my-2'>
                                                    <textarea
                                                        className='form-control'
                                                        name='description'
                                                        value={review.description}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Message"
                                                    />
                                                </div>
                                                <div>
                                                    <button className='btn btn-danger form-control my-2' >Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='row'>
                                                {
                                                    seereview.map((item) => {
                                                        return (
                                                            <div className='col-md-6 '>
                                                                <Rating name="half-rating-read" defaultValue={item.ratings} readOnly />
                                                                <h3>{item.subject}</h3>
                                                                <p>{item.description}</p>
                                                                
                                                            </div>
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
                    :
                    null
            }
        </>
    )
}
export default ProductDetails
