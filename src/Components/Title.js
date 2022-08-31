import React from 'react';
import logo from '../Images/new_logo_half.png';
const Title = () => {
    return (
        <div className='flex items-center justify-center pt-10 mt-10 mx-auto'>
            <img src={logo} alt="" className='w-4 h-4 mr-2' />
            <h1 className='text-xl font-bold'>Eden</h1>
        </div>
    );
};

export default Title;