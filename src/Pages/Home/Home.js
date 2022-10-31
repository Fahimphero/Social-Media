import React from 'react';
import search from '../../Images/Vector.svg';
import logo from '../../Images/Union 1.png'
import dropdown from '../../Images/Vector.png'
import './Home.css'
import Navbar from './Navbar';
import Posts from './Posts';

const Home = () => {
    return (
        <div>

            <div className='background-img text-light position-relative w-100'>
                <div className="position-absolute  start-0 text">
                    <h1 className='fw-bold'>Computer Engineering</h1>
                    <h5>142,765 Computer Engineers follows this</h5>
                </div>
            </div>
            <Posts></Posts>
        </div>
    );
};

export default Home;