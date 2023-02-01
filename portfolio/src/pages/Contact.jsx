import React from 'react'

const Contact = () => {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.getElementById('contactForm'));
        fetch(document.getElementById('contactForm').getAttribute('action'), {
            method: 'POST',
            headers: {
                'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(formData).toString()
        })
            .then(res => {
                if (res) {
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('message').value = "";

                    document.getElementById('success-text').style = { 'visibility': 'visible' };
                }
            });
    }

    return (
        <div className=' min-h-screen'>
            <main className=' text-center'>
                <form netlify name='contact' id='contactForm' className='flex flex-col justify-center items-center mb-4 bg-white/10 p-4 rounded-3xl'>
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