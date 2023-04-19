import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "male",
        dob: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        axios
            .post("http://16.170.252.94:8000/api/register-user/", user)
            .then((response) => {
                console.log(response.data.data.uid)
                localStorage.setItem('uid', JSON.stringify(response.data.data.uid))
                localStorage.setItem('otp', JSON.stringify(response.data.data.otp))
                localStorage.setItem('lname', JSON.stringify(response.data.data.name))
                Cookies.set('uid', response.data.data.uid);
                navigate('/')

            })
            .catch((error) => {
                console.log(error.data.data);
                // handle error
            });
    };

    return (
        <div className='Signup '>

            <div className='container' id="form">

                <div className='row'>
                    <div className='col-md-12 my-5'>
                        <h1 className='text-center'>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <span htmlFor="name">Name:</span>
                                <input className='form-control'
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <span htmlFor="email">Email:</span>
                                <input className='form-control'
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <span htmlFor="number">Number:</span>
                                <input className='form-control'
                                    type="tel"
                                    name="phone"
                                    value={user.phone}
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div >
                                <span htmlFor="dob">Date of Birth:</span>
                                <input className='form-control'
                                    type="date"
                                    name="dob"
                                    value={user.dob}
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='mb-3'>
                                <span htmlFor="gender">Gender:</span>
                                <select className='form-control'
                                    name="gender"
                                    value={user.gender}
                                    required
                                    onChange={handleInputChange}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className='d-flex w-100'>
                                <button className='btn btn-primary w-100' type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;
