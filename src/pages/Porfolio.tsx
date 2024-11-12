import { useContext, useEffect, useState } from "react";
import { DataContext, ContextProps } from "../context";
import withTransition from "../components/custom/Transition";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Navbar from "../components/custom/Navbar";
import { Badge } from "../components/ui/badge";
import ReactPlayer from "react-player";

const Porfolio: React.FC = () => {
  const { getMeta, projects, getAllProjects } =
    useContext<ContextProps>(DataContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMeta();
    getAllProjects();
    setIsLoading(false);

    // ifnore eslint for array denpendency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // load script tiktok
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="font-figtree flex flex-col gap-20 min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full">
        <ResponsiveMasonry
          className="container"
          columnsCountBreakPoints={{ 768: 1, 1024: 2, 1425: 3 }}>
          <Masonry gutter="30px">
            {isLoading ? (
              <div className="w-full h-full bg-zinc-700 rounded-3xl animate-pulse"></div>
            ) : (
              projects.allProjects.edges.map((project) => (
                <div
                  className="flex flex-col gap-3 justify-center"
                  key={project.node.id}>
                  <div className="relative">
                    {project.node.media ? (
                      <>
                        <ReactPlayer url={project.node.links} width="100%" />
                      </>
                    ) : project.node.categories === "tiktok" ? (
                      <>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: project.node.links,
                          }}></div>
                      </>
                    ) : (
                      <img
                        className="rounded-md object-cover"
                        src={project.node.photo?.src}
                        alt="img1"
                      />
                    )}
                  </div>
                  <div>
                    <Badge>{project.node.categories}</Badge>
                  </div>
                  <h1 className="text-lg font-semibold">
                    {project.node.title}
                  </h1>
                  <p className="text-zinc-400">{project.node.description}</p>
                </div>
              ))
            )}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="border-t border-zinc-700 text-center p-6">
        <p className="text-zinc-400">Made with ❤️ by samit and Giwapedia.</p>
      </div>
    </div>
  );
};

export default withTransition(Porfolio);
