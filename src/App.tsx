function App() {

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-fixed bg-gradient-to-b from-black to-gunmetal">
      <div className="w-full flex flex-col text-center justify-center content-middle md:w-1/2">
        <h1 className="text-5xl font-light text-timber md:text-7xl">Landon Thull</h1>
        <div className="mt-4 flex gap-4 w-full flex-wrap justify-center">
          <h3 className="inline whitespace-nowrap px-4 py-2 bg-black rounded-lg text-blue shadow-md">Software Engineer</h3>
          <h3 className="inline whitespace-nowrap px-4 py-2 bg-black rounded-lg text-blue shadow-md">CS Student</h3>
          <h3 className="inline whitespace-nowrap px-4 py-2 bg-black rounded-lg text-blue shadow-md">Coding Enthusiast</h3>
        </div>
      </div>
      <h2 className="mt-32 text-3xl text-timber font-extralight">Website Coming Soon</h2>
    </div>
  )
}

export default App
