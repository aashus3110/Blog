import React, { useState } from 'react';
import "../../App.css";
import { RiAccountCircleFill, RiLoginCircleLine } from 'react-icons/ri'

const Navbar = ({ logout, user }) => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className='bg-red-500 flex flex-col md:flex-row md:justify-start justify-center items-center'>
            <a href='/'>
                <div className="logo font-extrabold text-xl my-3 text-shadow-2 tracking-wide mx-5">CodeBlocks</div>
            </a>

            <div className="nav mx-5">
                <ul className='flex mb-4 md:mb-0 items-center font-bold space-x-6'>
                    <a href='/'><li>Home</li></a>
                    <a href='/'><li>About</li></a>
                    <a href='/'><li>Blog</li></a>
                    <a href='/'><li>Contact</li></a>
                </ul>
            </div>
            {dropdown &&
                <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute right-0 top-12 md:top-9 md:right-6 poin rounded-md hover:text-red-500 bg-red-200  ">
                    <ul>
                        <li onClick={logout} className='p-2 font-semibold text-sm'>
                            LogOut
                        </li>
                    </ul>
                </div>
            }
            {user && user.value ? (
                <RiAccountCircleFill onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="user font-extrabold text-2xl text-white absolute right-0 top-6 mx-8 md:right-0 md:top-3" />
            ) : (
                <a href='/Login'>
                    <RiLoginCircleLine className="login font-semibold text-2xl absolute right-0 top-6 mx-8 md:right-0 text-white md:top-3" />
                </a>
            )}
        </div>
    );
};

export default Navbar;
