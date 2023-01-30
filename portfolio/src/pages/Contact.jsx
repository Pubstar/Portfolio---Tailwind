import React from 'react'
import { Link } from "react-router-dom";
import githubImg from '../images/github.png'

const Contact = () => {

    function handleSubmit(e) {
        e.preventDefault();

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";

        document.getElementById('success-text').style = { 'visibility': 'visible' };
    }

    return (
        <div className=" min-h-screen px-8 py-12 bg-gradient-to-b from-blue-900 text-[#EDE7D9] font-sofia-sans h-full 2xl:px-80 xl:px-60 overflow-y-scroll">
            <header className=" flex justify-between items-center mb-36">
                <div className=' flex items-center gap-2'>
                    <span className=" cursor-pointer font-semibold">Pieter Hoek</span>
                    <img className=' w-6 h-6 cursor-pointer' onClick={() => { window.open('https://github.com/Pubstar') }} src={githubImg} alt="" />
                </div>
                <nav className=" flex gap-8">
                    <Link to="/" className=" cursor-pointer">Home</Link>
                    <Link to="contact" className=" cursor-pointer border-b-2 border-[#FFC914]">Contact</Link>
                </nav>
            </header>
            <main className=' text-center'>
                <form netlify name='contact' className='flex flex-col justify-center items-center mb-4'>
                    <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name">Your name:</label>
                    <input className=' mb-4 w-96 text-black' type="text" name="name" id="name" />
                    <label htmlFor="email">Your email:</label>
                    <input className=' mb-4 w-96 text-black' type="email" name="email" id="email" />
                    <label htmlFor="message">Please leave a message:</label>
                    <textarea className=' mb-4 text-black' name="message" id="message" cols="46" rows="10"></textarea>
                    <button onClick={handleSubmit} className=' border-2 px-4 py-2 rounded-2xl' type="submit">Send</button>
                </form>
                <span id='success-text' style={{ 'visibility': 'hidden' }} className=' text-green-600 font-bold'>Success! Message has been sent.</span>
            </main>
        </div>
    )
}

export default Contact