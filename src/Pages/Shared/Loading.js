import React from 'react';
import loading from '../../Assets/loading.gif';
const Loading = () => {
    return (
        <div className='flex justify-center mx-auto w-28 my-52'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;