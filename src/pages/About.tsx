import { useContext, useEffect, Suspense } from "react";
import Navbar from "../components/custom/Navbar";
import withTransition from "../components/custom/Transition";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

import { DataContext, ContextProps } from "../context";
import { Skeleton } from "../components/ui/skeleton";

const About: React.FC = () => {
  const { getAllAboutPage, getAllAbout } =
    useContext<ContextProps>(DataContext);

  useEffect(() => {
    getAllAboutPage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(getAllAbout);

  return (
    <div className="font-figtree flex flex-col gap-20 min-h-screen bg-white text-black">
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <h1 className="font-semibold text-3xl mb-12">About me</h1>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Hi...</h2>
            <Suspense
              fallback={
                <>
                  <Skeleton className="h-5" />
                </>
              }>
              <RichTextRenderer
                node={getAllAbout.About.descriptionAbout.json}
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <p className="font-semibold text-gray-600 text-lg text-center capitalize">
            services
          </p>
          <h1 className="font-semibold text-3xl mb-12 text-center">
            What I Am Great at
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <Suspense fallback={null}>
              {getAllAbout.allServices.edges.map((service, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                  <img
                    src={service.node.icon.src}
                    alt="editing"
                    className="w-20 h-20 mx-auto"
                  />
                  <div>
                    <h2 className="text-center font-bold">
                      {service.node.title}
                    </h2>
                    <p>{service.node.shortDescription}</p>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <p className="font-semibold text-gray-600 text-lg text-center capitalize">
            skill
          </p>
          <h1 className="font-semibold text-3xl mb-12 text-center">
            What I do
          </h1>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-between">
            {getAllAbout.allSkill.edges.map((skill, i) => (
              <img
                key={i}
                src={skill.node.icon.src}
                alt={skill.node.name}
                className="w-20 h-20"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <p className="font-semibold text-gray-600 text-lg text-center capitalize">
            work
          </p>
          <h1 className="font-semibold text-3xl mb-12 text-center">
            Experience
          </h1>
          <div className="flex flex-col gap-3">
            {getAllAbout.allExperience.edges.map((exp, i) => (
              <span
                className="py-1 px-3 border-b border-gray-50/15 flex justify-between"
                key={i}>
                <div>
                  <h2 className="font-semibold text-lg">{exp.node.name}</h2>
                  <p className="font-light">{exp.node.description}</p>
                </div>
                <div>
                  <p>{exp.node.year}</p>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <p className="font-semibold text-gray-600 text-lg text-center capitalize">
            contact us
          </p>
          <h1 className="font-semibold text-3xl mb-12 text-center">
            Ways to Contact Me
          </h1>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-between">
            {getAllAbout.allContact.edges.map((contact, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 justify-center items-center">
                <img
                  src={contact.node.icon.src}
                  alt={contact.node.title}
                  className="w-8 h-8 md:w-11 md:h-11"
                />
                <p>{contact.node.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800/15 text-center p-6">
        <p className="">Made with ❤️ by samit and Giwapedia.</p>
      </div>
    </div>
  );
};

export default withTransition(About);
