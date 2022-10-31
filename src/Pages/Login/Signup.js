import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate()
    const [customError, setCustomError] = useState('');

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate(from, { replace: true });
    }


    const handleEmailSignUp = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const displayName = event.target.userName.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;


        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            toast('Verification Email Sent')
            await updateProfile({ displayName: displayName });
        }
        else {
            setCustomError("Your two passwords didn't match");

        }
    }

    return (
        <div className=' pb-5'>
            <div className='container text-black'>
                {/* <p>This is login page</p> */}
                <h1 className='text-center text-danger pt-4'><FontAwesomeIcon style={{ color: 'royalblue' }} icon={faUserPlus}></FontAwesomeIcon></h1>
                <div className='login-form mx-auto button  rounded-3 '>
                    <form onSubmit={handleEmailSignUp} className='p-4'>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label fs-5">Your Name</label>
                            <input type="text" name='userName' className="form-control" id="formGroupExampleInput" placeholder="name" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' required></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fs-5">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password' required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleConfirmPassword1" className="form-label fs-5">Confirm Password</label>
                            <input type="password" name='confirmPassword' className="form-control" id="exampleConfirmPassword1" placeholder='confirm password' required></input>
                        </div>

                        <button type="submit" className="btn btn-dark mt-2 w-100 py-2 mb-3">SignUp</button>

                        {
                            customError ? <p><span className='fs-5 fw-bold text-danger'><u>Error</u>  </span> {customError}</p> : ''
                        }
                        {
                            !error || !updateError ?
                                <p></p>
                                :
                                <div>
                                    <p><span className='fs-5 fw-bold'><u>Error</u>  </span> {error?.message} {updateError?.message}</p>

                                </div>
                        }

                    </form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;