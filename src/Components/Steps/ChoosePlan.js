import React, { useState } from 'react';

const ChoosePlan = ({ setGoSteps }) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div className='my-8 py-10'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>How are you planning to use Eden?</h1>
            <p className='text-sm text-slate-400 py-3.5 text-center'>We'll streamline your setup experience accordingly.</p>
            <div className='w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/3 xxl:w-1/3 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <div onClick={handleClick} className={isActive ? 'border border-[#664de5] p-5 rounded' : 'border p-5 rounded'}>
                        <i class="uil uil-user text-xl"></i>
                        <h1 className='font-semibold text-sm mt-3 mb-2'>For Myself</h1>
                        <p className='text-slate-500'>Write better.Think more clearly.Stay organized.</p>
                    </div>
                    <div onClick={handleClick} className={isActive ? 'border p-5 rounded' : 'border border-[#664de5] p-5 rounded'}>
                        <i class="uil uil-users-alt text-xl"></i>
                        <h1 className='font-semibold text-sm mt-3 mb-2'>With my team</h1>
                        <p className='text-slate-500 text-md'>Wikis, docs, tasks & projects,  all in one place.</p>
                    </div>
                </div>
                <button className="btn bg-[#664de5] w-full rounded py-2.5 my-5 text-sm text-white" onClick={() => setGoSteps(3)}>
                    Create Workspace
                </button>
            </div>

        </div >
    );
};

export default ChoosePlan;