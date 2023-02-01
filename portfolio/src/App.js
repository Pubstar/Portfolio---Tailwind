import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import { Link } from "react-router-dom";
import githubImg from './images/github.png'

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-[#14143c] px-8 text-[#EDE7D9] font-sofia-sans h-full 2xl:px-80 xl:px-60">
        <header className=" flex justify-between items-center mb-36 bg-white/10 pb-8 pt-4 px-8 rounded-b-3xl">
          <div className=' flex items-center gap-2'>
            <span className=" cursor-pointer font-semibold">Pieter Hoek</span>
            <img className=' w-6 h-6 cursor-pointer' onClick={() => { window.open('https://github.com/Pubstar') }} src={githubImg} alt="" />
          </div>
          <nav className=" flex gap-8">
            <Link to="/" className=" cursor-pointer">Home</Link>
            <Link to="contact" className=" cursor-pointer">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
