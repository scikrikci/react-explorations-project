import { useState, useEffect } from "react";
import { useRipple, RippleEffect } from "../utils/ripple";

import { Link } from "react-router-dom";
import { GiAngryEyes } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import TabButton from "./TabButton";

const Navbar = () => {
  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const { rippleProps, ripples } = useRipple({
    color: "white",
  });

  // Functions
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleToggleClick = (event) => {
    rippleProps.onClick(event);
    toggleMenu();
  };

  // UseEffects
  useEffect(() => {
    if (!isSmallScreen) {
      setIsOpenMenu(false);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: "-200%" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 4,
        }}
        className="fixed top-6 z-50 w-full h-14"
      >
        <div
          className={`box-border mx-6 md:mx-12 px-4 py-2 h-full flex justify-between  rounded-xl transition-all duration-300 ${
            isOpenMenu ? "bg-bgPrimary" : isScrolled ? "bg-bgSecondary" : ""
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-full flex overflow-hidden"
          >
            <Link
              to={"/"}
              onClick={() => setIsOpenMenu(false)}
              className="h-full flex items-center"
            >
              <GiAngryEyes className="text-3xl text-textPrimary size-16 hover:text-red-400 transition-all duration-200 " />
            </Link>
          </motion.div>

          <div className="hidden lg:flex justify-center items-center gap-8">
            <TabButton to={"/"} layoutId="navbar-active-tab">
              Home
            </TabButton>
            <TabButton to={"/motion"} layoutId="navbar-active-tab">
              Motion
            </TabButton>
            <TabButton to={"/ripple"} layoutId="navbar-active-tab">
              Ripple
            </TabButton>
          </div>

          {/* Menu */}
          <button
            {...rippleProps}
            onClick={handleToggleClick}
            className="lg:hidden rounded-full relative w-10 h-10 flex items-center justify-center cursor-pointer select-none text-white"
          >
            <RippleEffect ripples={ripples} />
            <motion.div
              initial={false}
              animate={{ rotateY: isOpenMenu ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              className="absolute inset-0 flex items-center justify-center rounded-full "
            >
              <motion.div
                style={{
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  transformOrigin: "center center",
                }}
              >
                <IoMenu className="text-3xl" />
              </motion.div>
              <motion.div
                style={{
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  transform: "rotateY(180deg)",
                  transformOrigin: "center center",
                }}
              >
                <IoClose className="text-3xl" />
              </motion.div>
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-bgSecondary text-white flex flex-col items-center justify-center z-[49]"
          >
            <ul className="text-center space-y-4 text-xl">
              <li>
                <Link to={"/"} onClick={() => setIsOpenMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/motion"} onClick={() => setIsOpenMenu(false)}>
                  Motion
                </Link>
              </li>
              <li>
                <Link to={"/ripple"} onClick={() => setIsOpenMenu(false)}>
                  Ripple
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
