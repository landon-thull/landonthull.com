import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function HeroSection() {
  return (
    <section className="h-screen z-10 flex flex-col items-center justify-center text-neutral-200">
      <h1 className="font-bold text-5xl md:text-6xl tracking-wide z-10">
        Landon Thull
      </h1>
      <p className="text-neutral-600 mt-2 font-light md:mt-4 text-lg z-10">
        SOFTWARE ENGINEER
      </p>
      <div className="flex gap-x-8 justify-center z-10 mt-8">
        <a href="https://www.linkedin.com/in/landon-thull-20a987234/">
          <FaLinkedin size={32} className="hover:scale-110 transition-all" />
        </a>
        <a href="https://github.com/landon-thull">
          <FaGithub size={32} className="hover:scale-110 transition-all" />
        </a>
        <a href="https://www.youtube.com/@landonthull">
          <FaYoutube size={32} className="hover:scale-110 transition-all" />
        </a>
      </div>
      <BackgroundBeams className="z-0" />
    </section>
  );
}
