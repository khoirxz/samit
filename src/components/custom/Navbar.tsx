import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto w-full flex flex-row justify-between py-5 px-5 md:px-0 items-center">
      <div>
        <Link to={"/"} className="text-3xl font-bold uppercase ">
          Samit
        </Link>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <NavLink
          to={"/"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-white text-black py-2 px-4 rounded-full"
              : isActive
              ? "hover:text-black hover:bg-white py-2 px-4 rounded-full transition-all bg-white/10"
              : "hover:text-black hover:bg-white py-2 px-4 rounded-full transition-all"
          }>
          Home
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-white text-black py-2 px-4 rounded-full"
              : isActive
              ? "hover:text-black hover:bg-white py-2 px-4 rounded-full transition-all bg-white/10"
              : "hover:text-black hover:bg-white py-2 px-4 rounded-full transition-all"
          }>
          Portfolio
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-white text-black py-2 px-4 rounded-full"
              : isActive
              ? "hover:text-white hover:bg-black py-2 px-4 rounded-full transition-all bg-black/10"
              : "hover:text-black hover:bg-white py-2 px-4 rounded-full transition-all"
          }>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
