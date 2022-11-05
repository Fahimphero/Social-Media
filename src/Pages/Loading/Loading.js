import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='text-light bg-dark  w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '60vh' }}>

            <Spinner style={{ height: '200px', width: '200px' }} animation="border" role="status">
                {/* <span className="">Loading...</span> */}
            </Spinner>
            <strong className='fs-3'>Loading...</strong>
        </div>
    );
};

export default Loading;