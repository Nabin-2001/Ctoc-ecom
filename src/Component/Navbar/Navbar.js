import React, { useContext } from 'react'
import './Navbar.css'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Usercontext } from '../../App';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const{cart,setcart}=useContext(Usercontext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container ">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 text-center mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Product</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a  className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
       
        </ul>
        <form className="d-flex">
        <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Login</button>
       
        </form>
        <span className='ms-3' onClick={()=>navigate('/Cartitem')}><RiShoppingCart2Fill style={{color:"white", fontSize:'25px'}}/><sup className='my-5' style={{color:"white",fontSize:'15px'}}>{cart.length}</sup></span>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
