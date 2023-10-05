import HeroSectionChip from "@/components/hero_section/HeroSectionChip";
import {BsChevronDoubleDown} from "react-icons/bs";

const chipTitles: string[] = [
    "Software Engineer",
    "CS Student",
    "Coding Enthusiast"
];
const HeroSection = () => {
  return (
      <div className="flex justify-center items-center flex-col h-screen gap-y-8">
        <h1 className="text-6xl font-light text-timber">Landon Thull</h1>
        <div className="flex gap-4 w-full flex-wrap justify-center font-mono">
          {chipTitles.map((chipTitle) => (
              <HeroSectionChip label={chipTitle} key={chipTitle}/>
          ))}
        </div>
        <div className="absolute text-timber bottom-1/4">
          <BsChevronDoubleDown className="w-12 h-12 animate-bounce"/>
        </div>
      </div>
  );
}

export default HeroSection;