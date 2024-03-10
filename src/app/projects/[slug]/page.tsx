import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import markdownToHtml from "@/lib/markdownToHtml";
import { getProjectBySlug } from "@/lib/projects";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import ProjectBody from "./_components/ProjectBody";
import ProjectHeading from "./_components/ProjectHeading";

export default async function Project({ params }: Params) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-200">
      <article className="z-10 md:w-1/2 mx-4 md:mx-auto relative min-h-screen">
        <div className="px-8 py-8 z-10 border-x border-neutral-600 min-h-screen">
          <ProjectHeading
            heading={project.title}
            excerpt={project.excerpt}
            coverImage={project.coverImage}
          />
          <ProjectBody content={content} />
        </div>
      </article>
    </main>
  );
}
