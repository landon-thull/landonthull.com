import markdownToHtml from "@/lib/markdownToHtml";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectBody from "./_components/ProjectBody";
import ProjectHeading from "./_components/ProjectHeading";

export async function generateStaticParams() {
  const projects = getAllProjects();

  const slugs: { slug: string }[] = [];

  projects.map((project) => {
    slugs.push({ slug: project.slug });
  });

  return slugs;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return (
    <main className="bg-neutral-950 pt-16 min-h-screen text-neutral-200">
      <article className="z-10 md:w-1/2 mx-4 md:mx-auto relative min-h-screen">
        <div className="px-8 py-8 z-10 border-x border-neutral-600 min-h-screen">
          <ProjectHeading
            heading={project.title}
            excerpt={project.excerpt}
            tags={project.tags}
            coverImage={project.coverImage}
          />
          <ProjectBody content={content} />
        </div>
      </article>
    </main>
  );
}
