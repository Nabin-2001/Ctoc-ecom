import React from 'react'
import './Footer.css'
import { TfiFacebook } from 'react-icons/tfi';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import { RiWhatsappLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';

const Footer = () => {
    return (
      <div>
      
<footer className="text-center text-lg-start bg-light text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 text-reset">
      <TfiFacebook />
      </a>
      <a href="" className="me-4 text-reset">
        <FaGithub/>
      </a>
      <a href="https://www.google.com/search?q=codeconnex&rlz=1C1YTUH_enIN1049IN1049&oq=codeconnex&aqs=chrome.0.0i355i512j46i175i199i512.3448j0j4&sourceid=chrome&ie=UTF-8"  target="_blank" className="me-4 text-reset">
       <FaGoogle />
      </a>
      <a href="https://www.instagram.com/code_connex/?hl=en" target="_blank" className="me-4 text-reset">
       <FiInstagram/>
      </a>
      <a href="https://in.linkedin.com/company/code-connex-private-limited" target="_blank" className="me-4 text-reset">
        <ImLinkedin />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank" className="me-4 text-reset">
       <RiWhatsappLine />
      </a>
    </div>
   
  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Code Connex
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
  
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Phython</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">App develooment</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Carrear</a>
          </p>
        </div>
      

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><AiOutlineHome/> Hyderabad Talengana</p>
          <p>
            <AiOutlineMail />   codeconnex@.com
           
          </p>
          <p><BiPhone /> + 78 586 895 86</p>
          <p><RiWhatsappLine /> + 85 558 855 86</p>
        </div>
       
      </div>
      
    </div>
  </section>
 


  <div className="text-center p-4" >
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://www.google.com/search?q=codeconnex&rlz=1C1YTUH_enIN1049IN1049&oq=codeconnex&aqs=chrome.0.0i355i512j46i175i199i512.3448j0j4&sourceid=chrome&ie=UTF-8">Code Connex</a>
  </div>
 
</footer>

      </div>
    );
  };
export default Footer;
