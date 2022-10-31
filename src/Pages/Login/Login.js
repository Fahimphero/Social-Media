import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import google from '../../Images/google.png'
import './Login.css'

const Login = () => {

    const handleEmailLogin = () => {

    }
    const navigateToSignUp = () => {
        Navigate('/signup')
    }

    return (
        <div className=' pt-4 pb-5'>
            <div className=' container text-black'>
                <h1 className='text-center text-danger pt-4'><FontAwesomeIcon style={{ color: 'royalblue' }} icon={faUser}></FontAwesomeIcon></h1>
                <div className='login-form mx-auto   rounded-3 button' >
                    <form onSubmit={handleEmailLogin} className='px-4 pt-4 '>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-5">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required></input>
                        </div>

                        <button type="submit" className="btn btn-dark mt-2 w-100 py-2">Log In</button>
                        <p className='text-center  mt-2'><button className=' btn text-light border-0 p-0'><u>Forgotten Password?</u></button></p>

                        {/* {Element} */}

                    </form>
                    <div className='pb-4 px-4 pt-2'>
                        <button className="btn btn-dark mt-2 w-100 py-2 "><img style={{ width: '20px' }} src={google} alt="" />  Sign In Using Google</button>
                        <hr />
                        <Link to='/signup'><button type='submit' className="hover   text-dark fw-bold mt-2 w-100 py-2  ">Create a new account</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;