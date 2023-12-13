import Chip from "@/components/Chip";
import Image from "next/image";

const chipTitles: string[] = [
  "Software Engineer",
  "CS Student",
  "Coding Enthusiast",
];

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center bg-fixed bg-gradient-to-b from-black to-gunmetal">
      <div className="w-full flex flex-col text-center justify-center content-middle md:w-1/2 pt-48 pb-48">
        <h1 className="text-5xl font-light text-timber md:text-7xl">
          Landon Thull
        </h1>
        <div className="mt-4 flex gap-4 w-full flex-wrap justify-center">
          {chipTitles.map((title) => (
            <Chip key={title} title={title} />
          ))}
        </div>
      </div>
      <section className="w-full md:w-1/3 text-timber">
        <h2 className="text-3xl tracking-wide">About Me</h2>
        <p className="p-4 bg-black rounded-lg mt-2 shadow-md">
          I love programming, problem solving, and building things. I&apos;m
          current finishing up my degree in computer science at{" "}
          <a
            href="https://www.wgu.edu/"
            target="_blank"
            className="text-blue font-semibold underline"
          >
            Western Governor&apos;s University
          </a>
          . Currently I am working in Typescript with NextJS, and in Java with
          Spring Boot. In my free time, I enjoy playing piano and guitar,
          trading stocks, and watching videos about software engineering.
        </p>
      </section>
    </main>
  );
}
