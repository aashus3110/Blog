import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="bg-white text-center shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4 ">
                <h1 className='font-extrabold text-lg'>Forgot Password</h1>
                <a href="/LogIn" className='text-sm font-normal'>Or </a>
                <a href="/LogIn" className='font-normal text-red-500 text-xs ' > Login</a>
            </div>

            <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full md:w-[50%] py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex items-center justify-center">
                <button className="px-2 py-1 w-2/4 bg-red-500 rounded-lg font-semibold text-sm hover:shadow-black shadow-sm" type="button">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default ForgotPassword