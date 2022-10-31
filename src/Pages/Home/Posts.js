import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dropdown from '../../Images/Vector.png'
import img1 from '../../Images/Rectangle 5.png'
import img2 from '../../Images/Rectangle 5 (1).png'
import img3 from '../../Images/Rectangle 5 (2).png'
import people from '../../Images/Rectangle 3.png'
import people1 from '../../Images/Rectangle 3 (1).png'
import share from '../../Images/share.png'
import add from '../../Images/AddFriend.png'
import { faEye, faShare, faCircleInfo, faLocationDot, faXmark, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import group1 from '../../Images/Group.png'
import group2 from '../../Images/Group2.png'
import group3 from '../../Images/Group3.png'



const Posts = () => {
    return (
        <div className='container mt-3 mb-5'>
            <div className="row">

                <div className="col-lg-8 ">
                    <div className='d-flex'>
                        <div className='me-3 fw-bold'>All Posts(32) </div>
                        <div className='me-3'>Article </div>
                        <div className='me-3'>Event</div>
                        <div className='me-3'>Education</div>
                        <div className='me-3'>Job</div>

                    </div>
                    <hr />
                </div>

                <div className="col-lg-4">
                    <div className='d-flex'>
                        <div className='me-3'><button className='btn btn-secondary'>Write Post    <img src={dropdown} alt="" /></button> </div>

                        <div className='me-3'><button className='btn btn-primary'> <img src={add} alt="" /> Join Group</button> </div>


                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div class="card mb-3">
                        <img src={img1} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Article</h5>
                            <div className='d-flex justify-content-between'>
                                <p class="card-text fw-bold m-0 ">What if famous brands have regular fonts? Meet Regular brands</p>
                                <p className='fw-bolder fs-3 m-0'>...</p>
                            </div>
                            <div class="card-text"><small class="text-muted ">I have worked in UX for the better part of the decade.From now on, I plan to...</small>
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className="div">
                                        <img className='img-fluid rounded-pill w-25' src={people} alt="" /><span className='fw-bold user-name'> Sarthak Kumar</span>
                                    </div>
                                    <div className="d-flex align-items-center views">
                                        <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faEye} className="text-secondary"></FontAwesomeIcon> </div>
                                        <p className='pe-4 m-0 '>1.4k Views</p>

                                        <div className='px-3 bg-light'><img src={share} alt="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 ">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Article</h5>
                            <div className='d-flex justify-content-between'>
                                <p class="card-text fw-bold m-0 ">What if famous brands have regular fonts? Meet Regular brands</p>
                                <p className='fw-bolder fs-3 m-0'>...</p>
                            </div>
                            <div class="card-text"><small class="text-muted ">I have worked in UX for the better part of the decade.From now on, I plan to...</small>
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className="div">
                                        <img className='img-fluid rounded-pill w-25' src={people1} alt="" /><span className='fw-bold user-name' > Sarah West</span>
                                    </div>
                                    <div className="d-flex align-items-center views">
                                        <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faEye} className="text-secondary"></FontAwesomeIcon> </div>
                                        <p className='pe-4 m-0 '>1.4k Views</p>

                                        <div className='px-3 bg-light'><img src={share} alt="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Article</h5>
                            <div className='d-flex justify-content-between'>
                                <p class="card-text fw-bold m-0 ">What if famous brands have regular fonts? Meet Regular brands</p>
                                <p className='fw-bolder fs-3 m-0'>...</p>
                            </div>
                            <div class="card-text"><small class="text-muted ">I have worked in UX for the better part of the decade.From now on, I plan to...</small>
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className="div">
                                        <img className='img-fluid rounded-pill w-25' src={people1} alt="" /><span className='fw-bold user-name'> Sarthak Kumar</span>
                                    </div>
                                    <div className="d-flex align-items-center views">
                                        <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faEye} className="text-secondary"></FontAwesomeIcon> </div>
                                        <p className='pe-4 m-0 '>1.4k Views</p>

                                        <div className='px-3 bg-light'><img src={share} alt="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-12">
                    <div className=" mx-5">
                        <div>
                            <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>
                            <input className='border-0' type="text" name="" id="" placeholder='Enter Your Location' />
                            <span><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>


                        </div>
                        <hr />

                        <small className='text-muted'><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> Your location will help us serve better and extend a personalised experience</small>
                        <div className='mt-5 mb-4'>
                            <h4><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Recommended Groups</h4>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between pb-4">

                                <div><img className='img-fluid rounded-pill ' style={{ width: '36px' }} src={group1} alt="" /></div>
                                <button className='btn btn-dark rounded-pill'>Followed</button>
                            </div>
                            <div className="d-flex justify-content-between pb-4">

                                <div><img className='img-fluid rounded-pill ' style={{ width: '36px' }} src={group2} alt="" /></div>
                                <button className='btn btn-light rounded-pill'>Follow</button>
                            </div>

                            <div className="d-flex justify-content-between pb-4">

                                <div><img className='img-fluid rounded-pill ' style={{ width: '36px' }} src={group3} alt="" /></div>
                                <button className='btn btn-light rounded-pill'>Follow</button>
                            </div>
                            <div className="d-flex justify-content-between ">

                                <div><img className='img-fluid rounded-pill ' style={{ width: '36px' }} src={group1} alt="" /></div>
                                <button className='btn btn-light rounded-pill'>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;