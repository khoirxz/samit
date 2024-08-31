import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type TransitionProps = {
  Component: FunctionComponent;
};

const Transition: React.FC<TransitionProps> = ({ Component }) => {
  return (
    <>
      <Component />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black/15 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
};

const withTransition = (Component: FunctionComponent) => () =>
  <Transition Component={Component} />;

export default withTransition;
