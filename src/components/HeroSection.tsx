import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function HeroSection() {
  return (
    <section className="h-screen z-10 flex flex-col items-center justify-center text-neutral-200">
      <h1 className="font-bold text-5xl md:text-6xl tracking-wide">
        Landon Thull
      </h1>
      <p className="text-neutral-600 mt-2 md:mt-4 text-lg">SOFTWARE ENGINEER</p>
      <BackgroundBeams className="z-0" />
    </section>
  );
}
