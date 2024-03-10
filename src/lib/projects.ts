import { Project } from "@/interfaces/project";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
const PROJECTS_DIRECTORY = "projects";

export function getProjectSlugs() {
  return readdirSync(PROJECTS_DIRECTORY);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(PROJECTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects;
}
