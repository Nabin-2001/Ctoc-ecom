import React, { useContext } from 'react'
import { Component } from "react";
import './Brand.css'
import Slider from "react-slick";
import style from './Brand.module.css'
import { Usercontext } from '../../App';
const Brand = () => {
    const url = "http://16.170.252.94:8000";
    const { value } = useContext(Usercontext)
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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
    return (
        <div className="my-5" id="categry_Group">

            <div className="container-fluid " id="Align_group">
                <div className="row">
                    <Slider {...settings}>
                        {
                            value.data && value.data.map((item, index) => {
                                return (
                                    <div>
                                        <div className='col-md-2'>
                                            <img src={url + item.brand.brand_logo} />
                                        </div>
                                    </div>
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
