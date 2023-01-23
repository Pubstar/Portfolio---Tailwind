import movies from './images/movies.jpg'

function App() {
  return (
    <div className=" px-8 py-12 bg-[#2E282A] text-[#EDE7D9] font-sofia-sans h-full 2xl:px-80 xl:px-60">
      <header className=" flex justify-between items-center mb-36">
        <span className=" cursor-pointer font-semibold">Pieter Hoek</span>
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
        <div className=" flex">
          <div className=" w-64 h-96 relative flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl shadow-black">
            <span className=" absolute font-bold text-4xl z-10">Netflix UI</span>
            <div className=" w-full h-full bg-black/70 absolute over"></div>
            <img className=" w-full h-full" src={movies} alt="project card background" />
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
