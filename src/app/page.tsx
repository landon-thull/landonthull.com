import {Metadata} from "next";
import HeroSection from "@/components/hero_section/HeroSection";
import AboutSection from "@/components/about_section/AboutSection";
import ProjectsSection from "@/components/projects_section/ProjectsSection";

export const metadata: Metadata = {
  title: "Landon Thull | Software Engineer",
  description: "I'm Landon Thull, a computer science student and passionate software engineer. " +
      "Here, I showcase my personal projects and other related content."
}

const Page = () => {
  return (
      <>
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
      </>
  );
}

export default Page;
