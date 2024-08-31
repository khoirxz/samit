import { useContext, useEffect } from "react";
import { DataContext, ContextProps } from "../context";
import Transition from "../components/custom/Transition";

import Navbar from "../components/custom/Navbar";

import instagram from "../assets/instagram.svg";
import gmail from "../assets/google.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import wa from "../assets/whatsapp.svg";
import Social from "../components/custom/Social";

const Home: React.FC = () => {
  const { getMeta, meta, getAllProjects } =
    useContext<ContextProps>(DataContext);

  useEffect(() => {
    getMeta();
    getAllProjects();
    // ifnore eslint for array denpendency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(meta.About.backgroundHero);

  return (
    <div className="font-figtree flex flex-col gap-20 min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full md:gap-0 px-5 md:px-0 relative">
        <div className="bg-transparent rounded-3xl p-10 flex flex-col gap-3 shadow-md relative">
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/80 z-10" />
          <img
            src={meta.About.backgroundHero.src}
            loading="lazy"
            alt="hero"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="z-10 flex flex-col gap-3">
            <span className="absolute top-5 right-5 text-sm py-1 px-3 rounded-full bg-white/10 flex items-center gap-2">
              {meta.About.location}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 9C14 9.98891 13.7068 10.9556 13.1573 11.7779C12.6079 12.6001 11.8271 13.241 10.9134 13.6194C9.99979 13.9978 8.99446 14.0969 8.02455 13.9039C7.05465 13.711 6.16373 13.2348 5.46447 12.5355C4.76521 11.8363 4.289 10.9454 4.09608 9.97545C3.90315 9.00555 4.00217 8.00021 4.3806 7.08658C4.75904 6.17295 5.39991 5.39206 6.22215 4.84265C7.0444 4.29325 8.0111 4 9 4C10.3261 4 11.5979 4.52679 12.5355 5.46447C13.4732 6.40215 14 7.67392 14 9Z"
                  fill="#32FF46"
                />
              </svg>
            </span>
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={meta.About.profile.src}
              alt={meta.About.title}
            />
            <div className="flex flex-col gap-3 mt-6">
              <h1 className="text-3xl font-bold uppercase">
                {meta.About.title}
              </h1>
              <h1 className="text-xl uppercase italic">{meta.About.jobdesk}</h1>
              <h2 className="text-zinc-500">{meta.About.description}</h2>
            </div>

            <div className="flex flex-row gap-3">
              <Social icons={instagram} title="Instagram" />
              <Social icons={gmail} title="Gmail" />
              <Social icons={linkedin} title="Linkedin" />
              <Social icons={tiktok} title="Tiktok" />
              <Social icons={wa} title="Whatsapp" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3"></div>
      </div>

      <div className="border-t border-zinc-700 text-center p-6">
        <p className="text-zinc-400">Made with ❤️ by samit and Giwapedia.</p>
      </div>
    </div>
  );
};

export default Transition(Home);
