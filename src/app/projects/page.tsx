import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <main className="bg-grid-black min-h-screen">
      <div className="md:w-2/3 px-4 md:px-0 py-16 mx-auto">
        <h1 className="text-neutral-200 text-4xl mb-4 tracking-wide">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                key={project.slug}
                className="p-4 col-span-1 md:min-h-[500px] text-neutral-200 flex flex-col bg-neutral-950 border border-neutral-600 rounded-xl"
              >
                <img src={project.coverImage} className="" />
                <div className="border-b-2 border-neutral-600 my-4" />
                <span className="mb-4 italic">{project.excerpt}</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="border hover:bg-neutral-600 mt-auto border-neutral-600 text-center rounded-md px-8 py-4 transition-all"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
