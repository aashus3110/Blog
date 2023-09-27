import "../../App.css";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [inpval, setINP] = useState({
        email: "",
        password: "",
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
        const { email, password } = inpval;
        const res = await fetch("/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        let response = await res.json();
        console.log(response);
        if (response.success) {
            setINP({
                email: "",
                password: "",
            });
            localStorage.setItem('token',response.token)
            toast.success('You are successfully logged in', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                history.push('/');
            }, 1000); // Redirect after 2 seconds
        

    }
        else {
    setINP({
        email: "",
        password: "",
    });
    toast.error(response.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
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
        <div className="mb-4">
            <h1 className='font-extrabold text-lg'>Login in to your account</h1>
            <a className='text-sm font-normal' href="/Signup">Or </a>
            <a href="/Signup" className='font-normal text-red-500 text-xs'> Signup</a>
        </div>
        <form method="post">
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
            <div className="flex mb-5 items-center justify-center">
                <a href='/ForgotPassword' className="inline-block align-baseline font-bold text-sm tracking-wide text-red-500 text-shadow-2">
                    Forgot Password?
                </a>
            </div>
            <div className="flex items-center justify-center">
                <button
                    onClick={addinpdata}
                    className="px-2 py-1 w-2/4 bg-red-500 rounded-lg font-semibold text-sm hover:shadow-black shadow-sm" type="submit">
                    LogIn
                </button>
            </div>
        </form>
    </div>
);
}

export default Login;
