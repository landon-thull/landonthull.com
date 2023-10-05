const AboutSection = () => {
  return (
      <section className="text-center md:text-left py-4 flex justify-center">
        <div className="grow max-w-7xl flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-blue font-mono">// About Me</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="p-4 md:pr-8">
              <p className="text-timber text-lg indent-4">
                I'm Landon Thull, a computer science student based out of New Braunfels, Texas.
                I have a passion for all things computer science,
                from web development to computer hardware, and everything in-between.
              </p>
              <br/>
              <p className="text-timber text-lg indent-4">
                I find software engineering fascinating because it's an unlimited
                source of challenge with endless opportunity for growth & improvement.
              </p>
            </div>
            <div className="md:border-l-2 text-left p-4 md:pl-8 border-blue text-timber text-lg">
              <h4 className="text-2xl font-bold text-blue font-mono">Interests</h4>
              <ul className="ml-6 text-lg text-timber font-semibold font-mono list-disc">
                <li>Web Development</li>
                <li>Supply Chain Logistics</li>
                <li>Hardware Engineering / Robotics</li>
                <li>Data Science & AI/ML</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutSection;