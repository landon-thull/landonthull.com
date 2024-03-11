import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section className="py-16 px-4 md:px-0 md:w-2/3 mx-auto">
      <h2 className="text-neutral-200 text-4xl mb-4 tracking-wide">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => {
          // only display featured projects
          if (!project.feature) {
            return null;
          }

          return (
            <div
              key={project.slug}
              className="p-4 col-span-1 md:min-h-[500px] text-neutral-200 flex flex-col bg-neutral-950 border border-neutral-600 rounded-xl"
            >
              <img src={project.coverImage} className="" />
              <div className="grid w-full grid-cols-3 gap-2">
                {project.tags?.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="px-2 py-1 text-center border overflow-hidden border-neutral-600 rounded-md"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
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
    </section>
  );
}
