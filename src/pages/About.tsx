import Navbar from "../components/custom/Navbar";

import photoshop from "../assets/images/photoshop.png";
import premiere from "../assets/images/premiere.png";
import lightroom from "../assets/images/lightroom.png";
import filmora from "../assets/images/filmora.svg";
import canva from "../assets/images/canva.png";
import capcut from "../assets/images/capcut.png";
import editing from "../assets/images/editing.png";
import camera from "../assets/images/camera.png";
import video from "../assets/images/video.png";

import instagram from "../assets/cinstagram.svg";
import gmail from "../assets/cgoogle.svg";
import linkedin from "../assets/clinkein.svg";
import tiktok from "../assets/ctiktok.svg";
import wa from "../assets/cwa.svg";

const About: React.FC = () => {
  return (
    <div className="font-figtree flex flex-col gap-20 min-h-screen bg-white text-black">
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full px-5 md:px-0 flex flex-col gap-10">
        <div>
          <h1 className="font-semibold text-3xl mb-12">About me</h1>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Hi...</h2>
            <p className="text-lg">
              My name is M. Dimas Arif Saputra, I am a fresh graduate from
              Malang College of Engineering majoring in Electrical Engineering
              with a concentration in Multimedia Broadcasting.
            </p>
            <p className="text-lg">
              I have an interest in the creative industry such as television,
              social media content, film, videography, video editing and other
              things related to the creative industry. I have experience working
              as a program and production staff at Agropolitan TV for 3 years,
              apart from that I also have experience managing the GR eSports
              Instagram account.
            </p>
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
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <img src={editing} alt="editing" className="w-20 h-20 mx-auto" />
              <div>
                <h2 className="text-center font-bold">Video editor</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={camera} alt="editing" className="w-20 h-20 mx-auto" />
              <div>
                <h2 className="text-center font-bold">Graphic design</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={video} alt="editing" className="w-20 h-20 mx-auto" />
              <div>
                <h2 className="text-center font-bold">Videographer</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
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
          <div className="flex flex-row items-center justify-between">
            <img src={premiere} alt="premiere" className="w-20 h-20" />
            <img src={photoshop} alt="photoshop" className="w-20 h-20" />
            <img src={lightroom} alt="lightroom" className="w-20 h-20" />
            <img
              src={filmora}
              alt="lightroom"
              className="w-20 h-20 rounded-xl"
            />
            <img src={canva} alt="lightroom" className="w-20 h-20 rounded-xl" />
            <img
              src={capcut}
              alt="lightroom"
              className="w-20 h-20 rounded-xl"
            />
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
            <span className="py-1 px-3 border-b border-gray-50/15 flex justify-between">
              <div>
                <h2 className="font-semibold text-lg">Adobe Photoshop</h2>
                <p className="font-light">Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <p>2023-2024</p>
              </div>
            </span>
            <span className="py-1 px-3 border-b border-gray-50/15 flex justify-between">
              <div>
                <h2 className="font-semibold text-lg">Adobe Photoshop</h2>
                <p className="font-light">Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <p>2023-2024</p>
              </div>
            </span>
            <span className="py-1 px-3 border-b border-gray-50/15 flex justify-between">
              <div>
                <h2 className="font-semibold text-lg">Adobe Photoshop</h2>
                <p className="font-light">Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <p>2023-2024</p>
              </div>
            </span>
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
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={instagram} alt="instagram" className="w-11 h-11" />
              <p>@instagram</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={gmail} alt="instagram" className="w-11 h-11" />
              <p>@instagram</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={linkedin} alt="instagram" className="w-11 h-11" />
              <p>@instagram</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={tiktok} alt="instagram" className="w-11 h-11" />
              <p>@instagram</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={wa} alt="instagram" className="w-11 h-11" />
              <p>@instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800/15 text-center p-6">
        <p className="">Made with ❤️ by samit and Giwapedia.</p>
      </div>
    </div>
  );
};

export default About;
