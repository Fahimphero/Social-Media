import React from 'react';
import search from '../../Images/Vector.svg';
import logo from '../../Images/Union 1.png'
import dropdown from '../../Images/Vector.png'
import './Home.css'
import banner from '../../Images/fotoJoin.png'
import google from '../../Images/google.png'
import facebook from '../../Images/facebook.png'
import { Link, Navigate } from 'react-router-dom';

const Navbar = () => {



    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className='mobile w-100 d-flex justify-content-around align-items-center py-2'>
                        <div className='d-flex align-items-center'> <a class="navbar-brand" href=" "><span style={{ color: '#27A365', fontSize: '25px' }}>ATG.</span><span style={{ fontSize: '25px' }}>W<img src={logo} alt="" /></span ><span style={{ fontSize: '25px' }}>RLD</span> </a></div>
                        <div className='mobile-width' >
                            <form class="d-flex" role="search">
                                <input class="form-control ps-5 rounded-pill bg-light background" type="search" placeholder="  Search for your favourite groups in ATG"

                                    aria-label="Search">

                                </input>

                            </form>
                        </div>

                        <div className='d-flex align-items-center'>
                            <Link to='/login'> <button className='border-0 bg-light'>    <h5 className='m-0'>Create a acount. <span className='text-primary'>Its free! <span><img src={dropdown} alt="" /></span> </span></h5></button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;