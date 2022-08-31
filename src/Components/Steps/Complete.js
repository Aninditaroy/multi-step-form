import React from 'react';

const Complete = ({ setGoSteps }) => {
    return (
        <div className='my-8 py-10'>
            <div className='bg-[#664de5] w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-8'>
                <i class="uil uil-check text-2xl text-white"></i>
            </div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center w-full'>Congratulations, Eren!</h1>
            <p className='text-sm text-slate-400 py-3.5 text-center px-2 lg:px-0'>You can start completeted onboarding,you can start using the Eden!</p>
            <button className="block w-72 mx-auto btn bg-[#664de5] rounded py-2.5 my-2 text-sm text-white" onClick={() => setGoSteps(3)}>
                Launch Eden
            </button>
        </div>
    );
};

export default Complete;