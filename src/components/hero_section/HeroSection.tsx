import HeroSectionChip from "@/components/hero_section/HeroSectionChip";

const chipTitles: string[] = [
    "Software Engineer",
    "CS Student",
    "Coding Enthusiast"
];
const HeroSection = () => {
  return (
      <div className="flex justify-center items-center flex-col h-screen gap-y-8">
        <h1 className="text-6xl font-light text-timber">Landon Thull</h1>
        <div className="flex gap-4 w-full flex-wrap justify-center">
          {chipTitles.map((chipTitle) => (
              <HeroSectionChip label={chipTitle} key={chipTitle}/>
          ))}
        </div>
      </div>
  );
}

export default HeroSection;