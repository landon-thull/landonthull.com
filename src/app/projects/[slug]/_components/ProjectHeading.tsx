import markdownStyles from "./markdown-styles.module.css";

type Props = {
  heading: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
};

export default function ProjectHeading({
  heading,
  excerpt,
  coverImage,
  tags,
}: Props) {
  return (
    <div className={markdownStyles["markdown"]}>
      <h1>{heading}</h1>
      <sub>{excerpt}</sub>
      <div className="flex gap-x-2 py-2">
        {tags?.map((tag) => {
          return (
            <span className="text-neutral-200 hover:scale-105 transition-all text-sm border border-neutral-600 px-2 py-1 rounded-md">
              {tag}
            </span>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          zIndex: 20,
          height: "100%",
          position: "relative",
        }}
      >
        <img className="my-2" src={coverImage} />
        <hr className="border-neutral-200 border" />
      </div>
    </div>
  );
}
