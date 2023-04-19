import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Usercontext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';
import { Container, Typography, Stack } from '@mui/material';


const Navbar = () => {
    const singuphandle = () =>{
        navigate("/Signup")
        localStorage.clear();
    }
    const navigate = useNavigate()
    const { name, setname } = useContext(Usercontext)
    const [formData, setFormData] = useState({ name: '' });
    const handleChange = (event) => {
        setFormData(event.target.value)
    }
    
    localStorage.setItem('brand', JSON.stringify(formData))
    setname(formData)

    return (
        <nav >
            <container className="Container">
                <Stack className="nav_bar" spacing={3} direction='row' alignItems="center">
                    <Grid container spacing={3} alignItems="center" >
                        <Grid item md={3} className="navbar-logo">
                            <Typography style={{ cursor: "pointer" }} variant='h4' onClick={() => navigate('/')}>
                                Logo
                            </Typography>
                        </Grid>
                        <Grid item md={4} >
                            <div className="navbar-search">
                                <form action="" className="form">
                                    <ButtonGroup className="btn-group">
                                        <input type="text"
                                            placeholder="Search for Product, brands and more"
                                            className="search-input"
                                            onChange={handleChange}
                                            autoComplete="on"
                                            value={formData.name}
                                        />
                                        <button className="search-btn"><FaSearch /></button>
                                    </ButtonGroup>
                                </form>
                            </div>
                        </Grid>
                        <Grid item md={5} className="navbar-menu" direction="row" container align-items="center" justifyContent="space-around">
                            <Typography style={{ cursor: "pointer" }} onClick={() => navigate('/categry')}>Category</Typography>
                            <span>{JSON.parse(localStorage.getItem('lname'))}</span>
                            <button onClick={singuphandle} style={{ lineHeight: "1.0",backgroundColor:"rgb(73 108 205 / 12%)",color:"white" ,width:"102px",height:"29px" }}>Log out</button>
                            <Typography style={{ cursor: "pointer" }}>WishList</Typography>
                            <Typography  style={{ cursor: "pointer" }} onClick={()=>navigate('/Cartitem')} ><BsCart3 /></Typography>

                        </Grid>

                    </Grid>

                </Stack>
                <Stack>

                </Stack>

            </container>
        </nav>
    )
}
export default Navbar
