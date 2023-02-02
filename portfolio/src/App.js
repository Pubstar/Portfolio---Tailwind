import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import { Link } from "react-router-dom";
import githubImg from './images/github.png'

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-[#14143c] text-[#EDE7D9] font-sofia-sans h-full 2xl:px-80 xl:px-60 sm:px-8">
        <header className=" flex justify-between items-center mb-36 bg-white/10 pb-8 pt-4 px-4 rounded-b-3xl md:px-8">
          <div className=' flex items-center gap-2'>
            <span className=" cursor-pointer font-semibold">Pieter Hoek</span>
            <a target="_blank" rel="noreferrer" href="https://github.com/Pubstar">
              <img className=' w-6 h-6 cursor-pointer' src={githubImg} alt="" />
            </a>
          </div>
          <nav className=" flex gap-4 md:gap-8">
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
