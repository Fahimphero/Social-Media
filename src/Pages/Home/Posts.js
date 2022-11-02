import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import dropdown from '../../Images/Vector.png'
import img1 from '../../Images/Rectangle 5.png'
import img2 from '../../Images/Rectangle 5 (1).png'
import img3 from '../../Images/Rectangle 5 (2).png'
import people from '../../Images/Rectangle 3.png'
import people1 from '../../Images/Rectangle 3 (1).png'
import share from '../../Images/share.png'
import add from '../../Images/AddFriend.png'
import { faEye, faShare, faCircleInfo, faLocationDot, faXmark, faThumbsUp, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import group1 from '../../Images/Group.png'
import group2 from '../../Images/Group2.png'
import group3 from '../../Images/Group3.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import gif from '../../Images/Spinner-1s-104px (2).svg'
import { useQuery } from 'react-query';


const Posts = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    const [processing, setProcessing] = useState(false);
    const [showForm, setShowForm] = useState('none')
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState('');
    const [postId, setPostid] = useState('');

    const [value, setValue] = useState(0);
    const [likesQuantity, setQuantity] = useState();

    // const [post, setPost] = useState({});

    const imageStorageKey = '449a09738c7de2a852b1ccfbf7e449d2'

    const handlePost = () => {
        if (user) {
            setShowForm('block')
        }
        else {
            toast.error('Please Login First')
        }
    }

    useEffect(() => {
        fetch('https://social-media-server-kcnh.onrender.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])


    const handleCreatePost = (event) => {
        event.preventDefault();
        const formData = new FormData();


        // setShowForm('none')
        if (user) {
            const name = user?.displayName;
            const title = event.target.title.value;
            const body = event.target.post.value;
            const userImg = user?.photoURL;
            const image = event.target.file.files[0];


            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const img = result.data.url
                        const data = {
                            name: name,
                            title: title,
                            body: body,
                            likes: 0,
                            userImg: userImg,
                            image: img,
                            like: 'unliked',
                            comments: []
                        }
                        // Send to database
                        fetch('https://social-media-server-kcnh.onrender.com/posts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // setProcessing(true);
                                console.log(data)
                                event.target.reset();
                                setShowForm('none');
                                toast.success('Post added successfully')
                                // if (showForm === 'none') {
                                //     setProcessing(false);
                                // }
                            });

                    }

                    console.log('imgbb', result)
                })

        }
        else {
            toast('Please login first')
        }

    }

    const { data: post, isLoading, refetch } = useQuery('post', () =>
        fetch(`https://social-media-server-kcnh.onrender.com/posts/${postId}`).then(res =>
            res.json()
        )
    )
    refetch()
    const handleComment = (id) => {
        console.log(id)
        if (user) {
            setPostid(id)
        }
        else {
            toast.error('Please Login First')
        }
        // const url = `https://social-media-server-kcnh.onrender.com/posts/${id}`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setPost(data))
    }

    const handleSubmit = (e) => {
        if (user) {
            e.preventDefault()
            const comment = e.target.comment.value;
            console.log(comment)

            setComment(comment)
            const name = user?.displayName;
            const img = user?.photoURL;
            var comments = {
                comment: comment,
                userName: name,
                img: img,
            };
            const update = { comments }
            console.log(update)


            fetch(`https://social-media-server-kcnh.onrender.com/comments/${postId}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                    e.target.reset()
                })
        }
        else {
            e.preventDefault()
            toast.error('Please Login First')
            e.target.reset()
        }

    }


    let i = 0
    let j = 0

    const click = [''];
    const handleColor = (quantity, id, user, likeStatus) => {
        console.log(quantity, id, user.email, likeStatus)

        // const input = i + 1

        if (likeStatus === 'liked') {
            setValue(i + 1)
            console.log("i", value)
            if (value === 1) {
                setValue(0)
                console.log("i", value)
            }
        }

        else if (likeStatus === 'unliked') {
            setValue(j + 1)
            console.log("j", value)
            if (value === 1) {
                setValue(0)
                console.log("j", value)
            }
        }


        console.log('Value', value);


        click.push('1')
        console.log('array length', click.length)
        // click.pop()

        if (click.length % 2 === 0) {
            console.log('even')


        }
        else {
            console.log('odd')
        }

        setQuantity(quantity)
        console.log(likesQuantity)

        console.log(quantity);
        // const [user, loading, error] = useAuthState(auth);
        // const name = user.displayName;

        if ((value === 0 && likeStatus === 'liked') || likeStatus === 'unliked') {
            const email = user?.email;
            const totalLikes = quantity + 1;
            const liked = 'liked';

            const update = { totalLikes, email, liked }
            console.log(update);

            const url = `https://social-media-server-kcnh.onrender.com/posts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })

        }

        else if (likeStatus === 'liked') {
            const email = user?.email;
            const totalLikes = quantity - 1;
            const liked = 'unliked';

            const update = { totalLikes, email, liked }
            console.log(update);

            const url = `https://social-media-server-kcnh.onrender.com/posts/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(update)

            })

                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Quantity updated successfully');

                })

        }


    }

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
                        <div className='me-3'><button onClick={handlePost} className='btn btn-secondary'>Write Post    <img src={dropdown} alt="" /></button> </div>

                        <div className='me-3'><button className='btn btn-primary'> <img src={add} alt="" /> Join Group</button> </div>


                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div style={{ display: `${showForm}` }}>
                        <form onSubmit={handleCreatePost}>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control"
                                    id="exampleFormControlInput1" placeholder="your name" defaultValue={user?.displayName} readOnly></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Post Title</label>
                                <input type="text"
                                    name='title'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Title" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Write here</label>
                                <textarea type="text" name='post' className="form-control" required id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div>
                                <label htmlFor="formFile" className="form-label">Insert Image</label>
                                <div className='row'>

                                    <div className="mb-3 col-10">

                                        <input className="form-control" type="file" name='file' id="formFile"></input>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end ">
                                        <div >
                                            <button className='btn btn-primary rounded-3 px-4' type="submit "> Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {processing && (
                        <div className="d-flex justify-content-center"><img src={gif} alt="" /></div>

                    )}
                    {
                        posts?.map(post => <div key={post._id} className="card mb-3">
                            <img src={post?.image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Article</h5>
                                <div className='d-flex justify-content-between'>
                                    <p className="card-text fw-bold m-0 ">{post?.title}</p>
                                    <p className='fw-bolder fs-3 m-0'>...</p>
                                </div>
                                <div className="card-text"><small className="text-muted ">{post?.body}.</small>
                                    <div className='d-flex justify-content-between pt-3'>
                                        <div className="div">
                                            <img className='img-fluid rounded-pill user-img' src={post?.userImg} alt="" /><span className='fw-bold user-name'> {post?.name}</span>
                                        </div>
                                        <div className="d-flex align-items-center views">
                                            <div className="d-flex align-items-center">
                                                <button onClick={() => handleColor(post?.likes, post?._id, user, post?.like)} className='p-0 bg-white border-0'>
                                                    {
                                                        post?.like === 'liked' ? <FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} ></FontAwesomeIcon> : <FontAwesomeIcon icon={faHeart} className="text-secondary"></FontAwesomeIcon>
                                                    }

                                                </button>
                                            </div>
                                            <p className='ps-1 pe-2 m-0 '>{post?.likes}</p>
                                            <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faEye} className="text-secondary"></FontAwesomeIcon> </div>
                                            <p className='ps-1 pe-1 m-0 '>1.4k Views</p>

                                            <div className='px-2 bg-light'><img src={share} alt="" /></div>
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <p >
                                            <button onClick={() => handleComment(post?._id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='
                                            border-0 bg-white views'><FontAwesomeIcon icon={faComment} className="text-secondary"></FontAwesomeIcon> Add comment</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Comments</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {
                                        post?.comments?.map(p =>
                                            <div className='border-bottom mb-3 rounded-3 px-3 py-1'>
                                                <div className='d-flex align-items-center '>
                                                    <div className='d-flex align-items-center pe-3'>
                                                        <div>
                                                            <img className='rounded-3 img-fluid' style={{ width: '33px' }} src={p?.img} alt="" />
                                                        </div>

                                                    </div>
                                                    <p className='m-0 fs-5'>{p?.userName}</p>
                                                </div>
                                                <p className='m-0'>{p?.comment}</p>

                                            </div>)
                                    }
                                </div>
                                <div className="modal-footer">
                                    <form onSubmit={handleSubmit} className="row container">
                                        <div className='col-9'>
                                            <input className='w-100' type="text" name="comment" id="" placeholder='write your comment' />
                                        </div>
                                        <div className='col-3'>
                                            <button type="submit" className="btn btn-primary px-4">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="card mb-3">
                        <img src={img1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Article</h5>
                            <div className='d-flex justify-content-between'>
                                <p className="card-text fw-bold m-0 ">What if famous brands have regular fonts? Meet Regular brands</p>
                                <p className='fw-bolder fs-3 m-0'>...</p>
                            </div>
                            <div className="card-text"><small className="text-muted ">I have worked in UX for the better part of the decade.From now on, I plan to...</small>
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className="div">
                                        <img className='img-fluid rounded-pill w-25' src={people} alt="" /><span className='fw-bold user-name'> Sarthak Kumar</span>
                                    </div>
                                    <div className="d-flex align-items-center views">
                                        <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faHeart} className="text-secondary"></FontAwesomeIcon> </div>
                                        <p className='ps-1 pe-2 m-0 '>10</p>
                                        <div className="d-flex align-items-center"> <FontAwesomeIcon icon={faEye} className="text-secondary"></FontAwesomeIcon> </div>
                                        <p className='ps-1 pe-1 m-0 '>1.4k Views</p>

                                        <div className='px-2 bg-light'><img src={share} alt="" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}


                </div>
                <div className="col-lg-5 col-12">
                    <div className=" mx-5">
                        <div className='user-name'>
                            <span><FontAwesomeIcon className='pe-2' icon={faLocationDot}></FontAwesomeIcon></span>
                            <input className='border-0' type="text" name="" id="" placeholder='Enter Your Location' />
                            <span><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>


                        </div>
                        <hr />

                        <small className='text-muted'><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> Your location will help us serve better and extend a personalised experience</small>
                        <div className='mt-5 mb-4'>
                            <h4><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span className=''>Recommended Groups</span></h4>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between pb-4">

                                <div><img className='img-fluid rounded-pill ' style={{ width: '36px' }} src={group1} alt="" /></div>
                                <button className='btn btn-light rounded-pill'>Follow</button>
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
            <ToastContainer />
        </div>
    );
};

export default Posts;