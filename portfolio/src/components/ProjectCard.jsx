import React from 'react'
import githubImg from '../images/github.png'

const ProjectCard = (props) => {
    return (
        <div className=" w-64 h-96 relative rounded-3xl overflow-hidden shadow-xl shadow-black/40 p-4 text-center">
            <span className="font-bold text-3xl z-20 relative">{props.name}</span>
            <p className=" z-20 relative mt-10">{props.description}</p>
            <div className=" z-20 w-56 h-20 border-t-2 border-white/40 flex items-center gap-8 justify-center absolute bottom-0">
                <img onClick={() => { window.open(props.githubLink) }} className=" w-9 h-9 cursor-pointer" src={githubImg} alt="Github Logo" />
                <a className=" bg-[#FFC914] rounded-lg p-2 text-[#2E282A]" target="_blank" rel="noreferrer" href={props.livePageLink}>Visit live page</a>
            </div>
            <div className=" w-full h-full bg-black/80 absolute z-10 top-0 left-0"></div>
            <img className=" w-full h-full absolute object-fill top-0 left-0" src={props.bg} alt="project card background" />
        </div>
    )
}

export default ProjectCard