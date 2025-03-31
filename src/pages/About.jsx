import React from 'react';
//import project1 from "../assets/images/proj1.jpg";
// import project2 from "../assets/images/proj2.jpg";




export const About = () => {
    return(
        <section id='about' className='text-white p-8'>
            <h2 className='text-6xl font-bold mb-8'>
                About <span className='text-emerald-300'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                    <p className='text-white/50 mb-6'>
                    I'm Carl Madelo, a passionate software developer with a degree 
in Information Technology from Pamantasan ng Lungsod ng San Pablo. 
With a strong background in web development, accounting systems, 
and tech support, I thrive in creating innovative solutions
 that enhance efficiency and user experience.
 Whether it's building web applications, troubleshooting systems,
 or managing digital projects, I am dedicated to delivering quality and 
functionality in every project I work on.
                    </p>

                    <div className='rounded-lg p-4 mb-4 border border-white/20'>
                        <code className='text-emerald-200/50'>
                            const skills = [<br/>
                                &nbsp;&nbsp;'Tailwind CSS',
                            <br/>
                            &nbsp;&nbsp;'Bootstrap',
                            <br/>,
                            &nbsp;&nbsp;'React/Vite',
                            <br/>
                            &nbsp;&nbsp;'Html/CSS',
                            <br/>
                            &nbsp;&nbsp;'Vanilla Php',
                            <br/>
                            &nbsp;&nbsp;'SQL',
                            <br/>
                        
                            ];
                        </code>
                    </div>
                </div>

                    <div className='border border-white/20 h-auto rounded-lg p-6 '>
                        <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
                        <p className='text-white/50'>
                        I am a front-end developer skilled in HTML, CSS, Bootstrap, React, and Tailwind CSS. I specialize in building responsive, user-friendly web applications with a focus on clean UI and efficient performance. With experience in component-based development and modern design principles, I create intuitive and visually appealing interfaces.
                        </p>
                        <div className='mt-4  relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
                            <img
                            src={"https://i.pinimg.com/originals/75/87/df/7587df77ef521cf98057d0028ee983f1.gif"}
                            alt='Project 1'
                            className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                        
                    <div className='border border-white/20 rounded-lg p-6'>
                        <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                        <p className='text-white/50 mb-4'>
                        My goal is to continuously learn and enhance my programming and personal skills. By exploring new technologies, improving problem-solving, and refining leadership and communication, I aim to grow as both a person and a programmer, contributing to impactful projects.
                        </p>
                        <div className='grid grid-cols-1 text-center gap-4'>
                            <div className='border border-white/20 rounded-lg p-3'>
                                <h4 className='text-emerald-300 font-medium mb-2'>Frontend</h4>
                                <ul className='text-white/50 space-y-1 text-sm'>
                                    <li>React/Vite</li>
                                    <li>HTML/CSS</li>
                                    <li>Tailwind CSS</li>
                                   
                                </ul>
                            </div>
                            <div className='border border-white/20 rounded-lg p-3'>
                                <h4 className='text-emerald-300 font-medium mb-2'>Backend</h4>
                                <ul className='text-white/50 space-y-1 text-sm'>
                                    <li>Vanilla php</li>
                                    <li>XAMP</li>
                                    <li>MySql</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Front-End
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "90%"}}>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Back-End
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "85%"}}>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Dev-Ops
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div 
                                className='bg-emerald-300 h-2 rounded-full'
                                style={{ width: "75%"}}>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
                    <p className='text-white/50'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit officia deleniti laborum doloribus quae facilis recusandae quidem officiis nulla totam iure sed nemo odit consectetur nisi est unde, quia eaque ut placeat quaerat. Molestias, illo?
                    </p>
                </div>

                <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                    <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
                        <img
                            src={"https://i.pinimg.com/736x/21/0e/29/210e29660085e5136899f3ba92334991.jpg"}
                            alt='Project 2'
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold mt-4 mb-2'>05. Goals</h3>
                        <p className='text-white/50'>
                        My goal is to continuously learn and enhance my programming and personal skills. By exploring new technologies, improving problem-solving, and refining leadership and communication, I aim to grow as both a person and a programmer, contributing to impactful projects.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};