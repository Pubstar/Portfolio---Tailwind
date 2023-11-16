import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import { Link } from "react-router-dom";
import githubImg from './images/github.png'
import meImg from './images/me.jfif'

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-gradient-to-r from-[#14143c] via-[#2f2f75] to-[#14143c] relative text-[#EDE7D9] font-sofia-sans tracking-wider h-full 2xl:px-96 xl:px-60 sm:px-8">
        <header className=" border-2 border-t-0 border-[#FFC914] flex justify-between items-center mb-36 bg-white/10 pb-8 pt-4 px-4 rounded-b-3xl md:px-8">
          <div className=' flex items-center gap-2'>
            <img className=' w-20 h-20 rounded-full' src={meImg} alt="" />
            <span className=" cursor-pointer font-bold mx-1.5">Pieter Hoek</span>
            <a target="_blank" rel="noreferrer" href="https://github.com/Pubstar">
              <img className=' w-6 h-6 cursor-pointer' src={githubImg} alt="" />
            </a>
          </div>
          <nav className=" flex gap-4 box-border md:gap-8">
            <Link to="/" className=" cursor-pointer border-b-2 border-white/0 hover:border-[#FFC914]">Home</Link>
            <Link to="contact" className=" cursor-pointer border-b-2 border-white/0 hover:border-[#FFC914]">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <footer className=" border-2 border-b-0 border-[#FFC914] flex justify-between items-center bg-white/10 p-8 rounded-t-3xl md:px-8">
          <p>Pieter Hoek &#169;</p>
          <a href="mailto: pieterhoek@msn.com">pieterhoek@msn.com</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
