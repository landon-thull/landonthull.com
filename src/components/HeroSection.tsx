import Chip from "./Chip";

const chipTitles: string[] = [
  "Software Engineer", 
  "CS Student", 
  "Coding Enthusiast"
]

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col text-center justify-center content-middle md:w-1/2">
      <h1 className="text-5xl font-light text-timber md:text-7xl">Landon Thull</h1>
      <div className="mt-4 flex gap-4 w-full flex-wrap justify-center">
        {chipTitles.map((chipTitle) => (
          <Chip key={chipTitle} title={chipTitle} />
        ))}
      </div>
      <h2 className="mt-32 text-3xl text-timber font-extralight">Website Coming Soon</h2>
    </div>
  )
}

export default HeroSection;