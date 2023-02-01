import React from 'react'
import ProjectCard from '../components/ProjectCard';
import moviesImg from '../images/movies.jpg'
import reactImg from '../images/react.jpg'
import steamImg from '../images/steam.jpg'

const Homepage = () => {
    return (
        <div>
            <main className="mb-36 bg-white/10 p-10 rounded-3xl">
                <h2 className=" text-[#FFC914] text-2xl">Hello, my name is Pieter,</h2>
                <h1 className=" text-6xl mb-16 font-bold">Front-end developer.</h1>
                <p className=" text-4xl">I'm a passionate <span className=" border-b-4 border-[#FFC914]">webdeveloper</span> with the ability to create great things, usually using <span className=" border-b-4 border-[#FFC914]">React</span></p>
            </main>
            <section className='py-8'>
                <h2 className=" text-4xl font-bold mb-8">My Work</h2>
                <div className=" flex gap-12 flex-wrap items-center justify-center bg-white/10 p-4 rounded-3xl">
                    <ProjectCard bg={moviesImg} name="Netflix UI" description="I rebuild the Netflix homepage using React and Tailwindcss, the website has no functionality as I was primarliy focused on getting the design right." githubLink="https://github.com/Pubstar/netflix" livePageLink="https://leafy-yeot-9e427e.netlify.app/" />
                    <ProjectCard bg={reactImg} name="React + Express Login" description="This app uses express, react, and mongoDB. It's a simple register/login system. The goal here was to have a backend API that the front-end utilizes." githubLink="https://github.com/Pubstar/React-Fullstack" livePageLink="https://react-fullstack-client.onrender.com/" />
                    <ProjectCard bg={steamImg} name="Steam Profile Info" description="Use the Steam API to get information about a users steam profile. For now you will need the users SteamID, regular usernames do not work." githubLink="https://github.com/Pubstar/Steam-User-Info" livePageLink="https://steamchecker.onrender.com/" />
                </div>
            </section>
        </div>
    )
}

export default Homepage