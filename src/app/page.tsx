import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <HeroSection />
      <hr className="border-1 border-neutral-600" />
      <ProjectsSection />
    </main>
  );
}
