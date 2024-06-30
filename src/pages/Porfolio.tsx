import { useContext, useEffect } from "react";
import { DataContext, ContextProps } from "../context";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Navbar from "../components/custom/Navbar";

const Porfolio: React.FC = () => {
  const { getMeta, projects, getAllProjects } =
    useContext<ContextProps>(DataContext);

  useEffect(() => {
    getMeta();
    getAllProjects();
    // ifnore eslint for array denpendency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="font-figtree flex flex-col gap-20 min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full">
        <ResponsiveMasonry
          className="container"
          columnsCountBreakPoints={{ 768: 1, 1024: 2, 1425: 3 }}>
          <Masonry gutter="30px">
            {projects.allProjects.edges.map((project) => (
              <div
                className="flex flex-col gap-3 justify-center"
                key={project.node.id}>
                <div>
                  <img
                    className="rounded-md object-cover"
                    src={project.node.photo.src}
                    alt="img1"
                  />
                </div>
                <h1 className="text-lg font-semibold">{project.node.title}</h1>
                <p className="text-zinc-400">{project.node.description}</p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="border-t border-zinc-700 text-center p-6">
        <p className="text-zinc-400">Made with ❤️ by samit and Giwapedia.</p>
      </div>
    </div>
  );
};

export default Porfolio;
