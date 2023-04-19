import React, { useContext } from 'react'
import { Component } from "react";
import './Brand.css'
import Slider from "react-slick";
import style from './Brand.module.css'
import { Usercontext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
const Brand = () => {
    const navigate = useNavigate()
    const url = "http://16.170.252.94:8000";
    const { value } = useContext(Usercontext)
    console.log(value)
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const Senddata = (item) => {
        localStorage.setItem('brand', JSON.stringify(item.product_title))
    }
    return (
        <div className="my-5" id="categry_Group">

            <div className="container-fluid " id="Align_group">
                <div className="row">
                    <Slider {...settings}>
                        {
                            value.data && value.data.map((item) => {
                                return (
                                    <Link to="/categry" target="_blank" key={item.id}>
                                        <div key={item.id} onClick={() => Senddata(item)}>
                                            <div className='col-md-2'>
                                                <img src={url + item.brand.brand_logo} />
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Brand
