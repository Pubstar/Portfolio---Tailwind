import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './homepage.css'

import githubImg from '../images/github.png'
import linkedinImg from '../images/linkedin.png'
import moviesImg from '../images/movies.jpg'
import reactImg from '../images/react.jpg'
import steamImg from '../images/steam.jpg'
import chatboxImg from '../images/chatbox.jpg'
import ArrowRightSvg from '../images/arrow-right-svg.svg'

const Homepage = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            })
        })

        const allSections = document.querySelectorAll('section');
        allSections.forEach((el) => observer.observe(el));
    }, [])


    return (
        <div>
            <section className="mb-36 bg-white/10 p-4 rounded-3xl md:p-10">
                <h2 className=" text-[#FFC914] text-xl md:text-2xl">Hello, my name is Pieter,</h2>
                <h1 className=" text-5xl mb-16 font-bold md:text-6xl">Front-end developer.</h1>
                <p className=" text-4xl">I'm a passionate <span className=" border-b-4 border-[#FFC914]">webdeveloper</span> with the ability to create great things, usually using <span className=" border-b-4 border-[#FFC914]">React</span></p>
            </section>
            <section>
                <h2 className='text-4xl font-bold mb-8'>About me</h2>
                <div className='mb-36 bg-white/10 pt-4 px-4 pb-2 rounded-3xl md:pt-10 md:px-10 md:pb-4'>
                    <p>Hello! My name is Pieter, a web developer. I love JavaScript and building things for the web.
                        My primary focus is creating responsive, easy to use websites. If you are looking to hire please use the contact page, or send me an email at:
                        <a className=' font-semibold cursor-pointer' href="mailto: pieterhoek@msn.com"> Pieterhoek@msn.com</a></p>
                    <div className=' flex items-center w-12 gap-2 mt-8'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Pubstar">
                            <img className='grayscale' src={githubImg} alt="" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pieter-hoek/">
                            <img className='grayscale' src={linkedinImg} alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <h2 className='text-4xl font-bold mb-8'>Skills</h2>
                <div className='mb-36 bg-white/10 p-4 rounded-3xl md:p-10'>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className='mt-6'>
                        <li><img className='w-4 inline mr-2' src={ArrowRightSvg} alt="" />JavaScript</li>
                        <li><img className='w-4 inline mr-2' src={ArrowRightSvg} alt="" />React</li>
                        <li><img className='w-4 inline mr-2' src={ArrowRightSvg} alt="" />Node.js</li>
                        <li><img className='w-4 inline mr-2' src={ArrowRightSvg} alt="" />Firebase</li>
                        <li><img className='w-4 inline mr-2' src={ArrowRightSvg} alt="" />MongoDB</li>
                    </ul>
                </div>
            </section>
            <section className='py-8 pb-64'>
                <h2 className=" text-4xl font-bold mb-8">My Work</h2>
                <div className=" flex gap-12 flex-wrap items-center justify-center bg-white/10 p-4 rounded-3xl">
                    <ProjectCard bg={moviesImg} name="Netflix UI" description="I rebuild the Netflix homepage using React and Tailwindcss, the website has no functionality as I was primarliy focused on getting the design right." githubLink="https://github.com/Pubstar/netflix" livePageLink="https://leafy-yeot-9e427e.netlify.app/" />
                    <ProjectCard bg={chatboxImg} name="Chatbox" description="A simple chatbox made using Firebase and React, you can log-in with your Google account to chat or view the chat as a guest." githubLink="https://github.com/Pubstar/FirebaseChat/tree/main/firebasechat" livePageLink="https://chatbox-77947.firebaseapp.com/" />
                    <ProjectCard bg={reactImg} name="React + Express Login" description="This app uses express, react, and mongoDB. It's a simple register/login system. The goal here was to have a backend API that the front-end utilizes." githubLink="https://github.com/Pubstar/React-Fullstack" livePageLink="https://react-fullstack-client.onrender.com/" />
                    <ProjectCard bg={steamImg} name="Steam Profile Info" description="Use the Steam API to get information about a users steam profile. For now you will need the users SteamID, regular usernames do not work." githubLink="https://github.com/Pubstar/Steam-User-Info" livePageLink="https://steamchecker.onrender.com/" />
                </div>
            </section>
        </div>
    )
}

export default Homepage