import React from 'react'
import './Footer.css'
import { RiFacebookFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import {IoLogoInstagram } from 'react-icons/io';

import {TfiLinkedin } from 'react-icons/tfi';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Help</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Mobile Application</a></li>
                <li><a href="#">Wesite</a></li>
                <li><a href="#">Ui/Ux design</a></li>
                <li><a href="#">Graphic design</a></li>
                <li><a href="#">Animation</a></li>
              </ul>
            </div>
            <hr className='my-2' style={{color:"white"}}/>
            <div className="col-md-3 col-sm-6 my-3">
              <ul className="social-icons ">
                <li><a href="#"><li><RiFacebookFill/></li></a></li>
                <li><a href="#"><i ><FaTwitter/></i></a></li>
                <li><a href="#"><i><IoLogoInstagram/></i></a></li>
                <li><a href="#"><i><TfiLinkedin/></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;
