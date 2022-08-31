import React from 'react';

const Account = ({ setGoSteps }) => {
    return (
        <div className='my-8 py-10'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>Welcome! First things first...</h1>
            <p className='text-sm text-slate-400 py-3.5 text-center'>You can always change them later.</p>
            <div className='w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/3 xxl:w-1/3 mx-auto '>
                <div className='my-3'>
                    <label for="full_name" class="block mb-2 text-sm   font-black text-gray-700">Full name</label>
                    <input type="text" id="full_name" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full p-2.5 focus:outline-gray-300" placeholder="Steve Jobs" required />
                </div>
                <div>
                    <label for="display_name" class="block mb-2 text-sm   font-black text-gray-700">Display name</label>
                    <input type="text" id="display_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-gray-300" placeholder="Steve" required />
                </div>
                <button className="btn bg-[#664de5] w-full rounded py-2.5 my-5 text-sm text-white" onClick={() => setGoSteps(1)}>
                    Create Workspace
                </button>
            </div>

        </div>
    );
};

export default Account;