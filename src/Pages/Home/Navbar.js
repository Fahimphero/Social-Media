import React from 'react';
import search from '../../Images/Vector.svg';
import logo from '../../Images/Union 1.png'
import dropdown from '../../Images/Vector.png'
import './Home.css'
import banner from '../../Images/fotoJoin.png'
import google from '../../Images/google.png'
import facebook from '../../Images/facebook.png'
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);


    const handleSignout = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className='mobile w-100 d-flex justify-content-around align-items-center py-2'>
                        <div className='d-flex align-items-center'> <a className="navbar-brand" href="/"><span style={{ color: '#27A365', fontSize: '25px' }}>ATG.</span><span style={{ fontSize: '25px' }}>W<img src={logo} alt="" /></span ><span style={{ fontSize: '25px' }}>RLD</span> </a></div>
                        <div className='mobile-width' >
                            <form className="d-flex" role="search">
                                <input className="form-control ps-5 rounded-pill bg-light background" type="search" placeholder="  Search for your favourite groups in ATG"

                                    aria-label="Search">

                                </input>

                            </form>
                        </div>

                        <div className='d-flex align-items-center'>

                            {
                                user ? <button onClick={handleSignout} className='border-0 bg-light'>    <h5 className='m-0'> <span className='text-primary'>Sign Out <span><img src={dropdown} alt="" /></span> </span></h5></button> : <Link to='/login'> <button className='border-0 bg-light'>    <h5 className='m-0'>Create a acount. <span className='text-primary'>Its free! <span><img src={dropdown} alt="" /></span> </span></h5></button></Link>
                            }


                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;