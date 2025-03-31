import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillInstagram
} from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
    return(
        <footer className='py-8' id='contact'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <div className='flex items-center justify-between flex-col md:flex-row '>
                    <div>
                        <h2 className='md:text-7xl text-4xl font-bold mb-10 text-white/50'>
                        Get In <span className='text-gray-400'>Touch</span>
                        </h2>
                        <a
                        className='md:text-1xl text-2xl  font-semibold text-white underline decoration-gray-400 decoration-2
                        underline-offset-4 hover:decoration-gray-200 transition duration-300' 
                        href="#">
                           carlflorencemadelo@gmail.com
                        </a>
                    </div>

                    <div className='text-white/50 mt-12'>
                        <div className='mb-8'>
                            <p className='text-lg mb-1'>Phone</p>
                            <a
                            className=' text-2xl font-semibold underline decoration-gray-400 decoration-2
                            underline-offset-4 hover:decoration-gray-400 transition duration-300' 
                            href="+0(63) 423 2342">
                                0(63)915674818
                            </a>   
                        </div>

                        <div className='text-lg mb-8'>
                            <p className='font-bold'>Place</p>
                            <p>Street: San Pablo City</p>
                            <p>City : San Pablo City</p>
                            <p>Philipines</p>
                        </div>
                    </div>

                </div>

                <div className='relative z-10 text-center mt-8 py-12'>
                    <h1 className='hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>
                        Carl Madelo
                    </h1>
                        {/* need to finish animation in here */}
                    <h1 className='md:hidden relative text-7xl md:text-[10rem] lg:text-[10rem] font-bold text-white opacity-10 '>
                        CARL
                        <br/>
                        MADELO
                    </h1>
                </div>

                <div className='relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
                    <p className='text-gray-200 caption text-n-4 lg:block'>
                    2025. All rights reserved.
                    </p>

                    <ul className='flex gap-5 flex-wrap'>
                        <a 
                        href="#"
                        aria-label='Github'
                        className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-500 transition-all duration-500'
                        >
                            <AiFillGithub size={30}/>
                        </a>
                        <a 
                        href="#"
                     aria-label="Visit my LinkedIn profile"
                        className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-500 transition-all duration-500'
                        >
                           <AiFillLinkedin size={30} />
                        </a>
                        <a 
                        href="#"
                        aria-label='Facebook'
                        className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-500 transition-all duration-500'
                        >
                            <AiFillFacebook size={30}/>
                        </a>
                        <a 
                        href="#"
                        aria-label='Instagram'
                        className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-500 transition-all duration-500'
                        >
                            <AiFillInstagram size={30}/>
                        </a>
                    </ul>
                </div>

            </div>

        </footer>
    );
};