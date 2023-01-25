import ProjectCard from './components/ProjectCard';
import moviesImg from './images/movies.jpg'
import reactImg from './images/react.jpg'
import githubImg from './images/github.png'

function App() {
  return (
    <div className=" px-8 py-12 bg-[#2E282A] text-[#EDE7D9] font-sofia-sans h-full 2xl:px-80 xl:px-60">
      <header className=" flex justify-between items-center mb-36">
        <div className=' flex items-center gap-2'>
          <span className=" cursor-pointer font-semibold">Pieter Hoek</span>
          <img className=' w-6 h-6 cursor-pointer' onClick={() => { window.open('https://github.com/Pubstar') }} src={githubImg} alt="" />
        </div>
        <nav className=" flex gap-8">
          <span className=" cursor-pointer border-b-2 border-[#FFC914]">Home</span>
          <span className=" cursor-pointer">Contact</span>
        </nav>
      </header>
      <main className="mb-36">
        <h2 className=" text-[#FFC914] text-2xl">Hello, my name is Pieter,</h2>
        <h1 className=" text-6xl mb-16 font-bold">Front-end developer.</h1>
        <p className=" text-4xl">I'm a passionate <span className=" border-b-4 border-[#FFC914]">webdeveloper</span> with the ability to create great things, usually using <span className=" border-b-4 border-[#FFC914]">React</span></p>
      </main>
      <section>
        <h2 className=" text-4xl font-bold mb-8">My Work</h2>
        <div className=" flex gap-12 flex-wrap">
          <ProjectCard bg={moviesImg} name="Netflix UI" description="I rebuild the Netflix homepage using React and Tailwindcss, the website has no functionality as I was primarliy focused on getting the design right." githubLink="https://github.com/Pubstar/netflix" livePageLink="https://leafy-yeot-9e427e.netlify.app/" />
          <ProjectCard bg={reactImg} name="React + Express Login" description="This app uses express, react, mongoDB and express. It's a simple register/login system. The goal here was to have a backend API that the front-end utilizes" githubLink="https://github.com/Pubstar/React-Fullstack" livePageLink="https://react-fullstack-client.onrender.com/" />
        </div>
      </section>
    </div>
  );
}

export default App;
