import {Metadata} from "next";
import HeroSection from "@/components/hero_section/HeroSection";

export const metadata: Metadata = {
  title: "Landon Thull | Software Engineer",
  description: "I'm Landon Thull, a computer science student and passionate software engineer. " +
      "Here, I showcase my personal projects and other related content."
}

const Page = () => {
  return (
      <HeroSection />
  );
}

export default Page;
