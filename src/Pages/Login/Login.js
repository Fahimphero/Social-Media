import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import google from '../../Images/google.png'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [userEmail, setuserEmail] = useState('')
    const location = useLocation();

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    let Element;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user || user1) {
        navigate(from, { replace: true });
    }

    const handleEmail = (event) => {
        const email = event.target.value;
        console.log(email)
        setuserEmail(email);
    }

    const handleEmailLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleReset = async () => {
        if (userEmail) {
            await sendPasswordResetEmail(userEmail);
            toast.success('Sent email');
            console.log(userEmail)
        }
        else {
            toast('Please enter your email address');
        }
    }


    if (error || error1) {
        Element = <p className='text-dark'><span className='fs-5 fw-bold'>Error  </span> {error?.message} {error1?.message}</p>
    }

    return (
        <div className=' pt-4 pb-5'>
            <div className=' container text-black'>
                <h1 className='text-center text-danger pt-4'><FontAwesomeIcon style={{ color: 'royalblue' }} icon={faUser}></FontAwesomeIcon></h1>
                <div className='login-form mx-auto   rounded-3 button' >
                    <form onSubmit={handleEmailLogin} className='px-4 pt-4 '>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input onChange={handleEmail} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-5">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required></input>
                        </div>

                        <button type="submit" className="btn btn-dark mt-2 w-100 py-2">Log In</button>

                        <p className='text-center  mt-2'>
                            <button onClick={handleReset} className=' btn text-light border-0 p-0'><u>Forgotten Password?</u></button>
                        </p>

                        {Element}

                    </form>
                    <div className='pb-4 px-4 pt-2'>
                        <button onClick={() => signInWithGoogle()} className="btn btn-dark mt-2 w-100 py-2 "><img style={{ width: '20px' }} src={google} alt="" />  Sign In Using Google</button>
                        <hr />
                        <Link to='/signup'><button type='submit' className="hover   text-dark fw-bold mt-2 w-100 py-2  ">Create a new account</button></Link>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;