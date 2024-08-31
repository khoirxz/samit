import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TextAlignJustifyIcon, Cross1Icon } from "@radix-ui/react-icons";
import clsx from "clsx";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 20px) 20px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 20px) 20px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // remove overflow from body when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative max-w-screen-md mx-auto w-full flex flex-row justify-between py-5 px-5 md:px-0 items-center">
        <div>
          <Link to={"/"} className="text-3xl font-bold uppercase">
            Samit
          </Link>
        </div>
        {/* Tombol menu di sebelah kanan atas dengan posisi fixed */}
        <div className="lg:hidden flex items-center">
          <motion.button
            onClick={toggleModal}
            className={clsx(
              "fixed top-4 right-5 w-12 h-12 rounded-full flex items-center justify-center z-50 ",
              location.pathname.split("/")[1] === "about"
                ? "bg-white"
                : "bg-black"
            )}
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            custom={1000}
            initial="closed">
            {isOpen ? (
              <Cross1Icon
                className={clsx(
                  "size-6 fill-white",
                  location.pathname.split("/")[1] === "about"
                    ? "fill-black"
                    : "fill-white"
                )}
              />
            ) : (
              <TextAlignJustifyIcon
                className={clsx(
                  "size-6 fill-white",
                  location.pathname.split("/")[1] === "about"
                    ? "fill-black"
                    : "fill-white"
                )}
              />
            )}
          </motion.button>
        </div>

        <div className="hidden lg:flex flex-row gap-3 items-center">
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
      {/* Menu harus tetap pada posisi yang benar terlepas dari tombol */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx(
              "fixed inset-0 flex justify-center items-center z-40 ",
              location.pathname.split("/")[1] === "about"
                ? "bg-white"
                : "bg-black"
            )}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            custom={1000}>
            <motion.div
              className="w-full h-full flex flex-col justify-center items-center relative"
              onClick={(e) => e.stopPropagation()}>
              <motion.ul
                className="space-y-4 text-center w-full"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                exit="closed">
                {["Home", "Portfolio", "About"].map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-center p-2 text-xl rounded"
                    variants={itemVariants}
                    whileTap={{ scale: 0.9 }}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      onClick={toggleModal}>
                      {item}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
