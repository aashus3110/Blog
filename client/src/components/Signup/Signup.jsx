import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const history = useHistory();

    const [inpval, setINP] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
    });

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const addinpdata = async (e) => {
        e.preventDefault();
        const { name, userName, email, password } = inpval;
        const res = await fetch('/Signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                userName,
                email,
                password,
            }),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
            toast.warning('OOPS, DATA IS INCOMPLETE', {
                // Toast configuration
            });
        } else {
            setINP({
                name: '',
                userName: '',
                email: '',
                password: '',
            });
            toast.success('Your account has been created', {
                // Toast configuration
            });
            setTimeout(() => {
                history.push('/Login');
            }, 1000);
        }
    };

    return (
        <div className="bg-white text-center shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="mb-4 ">
                <h1 className='font-extrabold text-lg'> Sign up for an account</h1>
                <a href="/LogIn" className='text-sm font-normal'>Or </a>
                <a href="/LogIn" className='font-normal text-red-500 text-xs ' > Login</a>
            </div>
            <form method="POST">
                <div className="mb-4 ">
                    <input value={inpval.name}
                        onChange={setdata}
                        className="shadow appearance-none border rounded w-full md:w-[50%] py-2 px-3 text-grey-darker" id="name"
                        name="name"
                        type="text"
                        placeholder="name" />
                </div>
                <div className="mb-4 ">
                    <input value={inpval.userName}
                        onChange={setdata}
                        className="shadow appearance-none border rounded w-full md:w-[50%] py-2 px-3 text-grey-darker" id="username"
                        name="userName"
                        type="text"
                        placeholder="Username" />
                </div>
                <div className="mb-4">
                    <input value={inpval.email}
                        onChange={setdata}
                        className="shadow appearance-none border rounded w-full md:w-[50%] py-2 px-3 text-grey-darker" id="email"
                        name="email"
                        type="email"
                        placeholder="Email" />
                </div>
                <div className="mb-4 ">
                    <input value={inpval.password}
                        onChange={setdata}
                        className="shadow appearance-none border rounded w-full md:w-[50%] py-2 px-3 text-grey-darker" id="password"
                        name="password"
                        type="password"
                        placeholder="Password" />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={addinpdata}
                        className="px-2 py-1 w-2/4 bg-red-500 rounded-lg font-semibold text-sm hover:shadow-black shadow-sm" type="submit">
                        Signup
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Signup