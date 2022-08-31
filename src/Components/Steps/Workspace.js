import React from 'react';

const Workspace = ({ setGoSteps }) => {
    return (
        <div className='my-8 py-10'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center w-full'>Let's set up a home for all your work</h1>
            <p className='text-sm text-slate-400 py-3.5 text-center'>You can always create another workspace later.</p>
            <div className='w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/3 xxl:w-1/3 mx-auto '>
                <div className='my-3'>
                    <label for="workspace_name" class="block mb-2 text-sm font-black text-gray-700">Workspace name</label>
                    <input type="text" id="workspace_name" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full p-2.5 focus:outline-gray-300" placeholder="Eden" required />
                </div>
                <div className=''>
                    <label for="workspace_name" class="block mb-2 text-sm font-black text-gray-700">Workspace URL <span className='text-xs text-gray-300 font-medium'>(optional)</span></label>
                    <div class="inline-flex bg-slate-100 rounded border border-gray-200 w-full">
                        <div class="bg-gray-200 py-2 px-4 text-gray-600">www.eden.com/</div>
                        <input
                            type="text"
                            placeholder="Example"
                            class="border-transparent px-4 focus:outline-none bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full p-2.5"
                        />
                    </div>
                </div>
                <button className="btn bg-[#664de5] w-full rounded py-2.5 my-5 text-sm text-white" onClick={() => setGoSteps(2)}>
                    Create Workspace
                </button>
            </div>
        </div>
    );
};

export default Workspace;