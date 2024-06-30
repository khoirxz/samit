import { useState } from "react";

type SocialProps = {
  icons: string;
  title: string;
};

const Social: React.FC<SocialProps> = ({ icons, title }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className="flex flex-row items-center gap-2 transition-all bg-white/10 hover:bg-white/20 py-3 px-3 rounded-xl"
      onClick={() => setIsPressed(!isPressed)}>
      <div className="rounded-full">
        {<img src={icons} alt="ig" className="block mx-auto h-5 w-5" />}
      </div>
      {isPressed ? <span className="text-sm">{title}</span> : null}
    </button>
  );
};

export default Social;
