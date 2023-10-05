const ProjectsSection = () => {
  return (
      <section className="text-center md:text-left pb-64 py-4 flex justify-center">
        <div className="grow max-w-7xl flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-blue font-mono">// Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center pl-0">
            <li className="max-w-md overflow-hidden shadow-xl bg-gunmetal y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
              <a>
                <section className="p-5">
                  <h5 className="text-2xl font-bold">Quote Master (WIP)</h5>
                  <p className="text-timber min-h-[100px]">Quote management system geared towards the manufacturing industry.</p>
                </section>
              </a>
            </li>
            <li className="max-w-md overflow-hidden shadow-xl bg-gunmetal y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
              <a>
                <section className="p-5">
                  <h5 className="text-xl font-bold">Quote Master (WIP)</h5>
                  <p className="text-timber min-h-[100px]">Quote management system geared towards the manufacturing industry.</p>
                </section>
              </a>
            </li>
            <li className="max-w-md overflow-hidden shadow-xl bg-gunmetal y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
              <a>
                <section className="p-5">
                  <h5 className="text-2xl font-bold">Quote Master (WIP)</h5>
                  <p className="text-timber min-h-[100px]">Quote management system geared towards the manufacturing industry.</p>
                </section>
              </a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default ProjectsSection;