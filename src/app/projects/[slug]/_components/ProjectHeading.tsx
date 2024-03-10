import markdownStyles from "./markdown-styles.module.css";

type Props = {
  heading: string;
  excerpt: string;
  coverImage: string;
};

export default function ProjectHeading({
  heading,
  excerpt,
  coverImage,
}: Props) {
  return (
    <div className={markdownStyles["markdown"]}>
      <h1>{heading}</h1>
      <sub>{excerpt}</sub>
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
