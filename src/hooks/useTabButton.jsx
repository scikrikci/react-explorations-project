import { useLocation } from "react-router-dom";
import { useRipple } from "../utils/ripple";
import { style } from "framer-motion/client";

export const useTabButton = (to, layoutId, radius = "rounded-md") => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const { rippleProps, ripples } = useRipple({
    duration: 600,
    opacity: 0.35,
    color: "black",
  });

  const getClassName = () => {
    const baseClasses = `z-0 data-[focus-visible=true]:z-10 min-w-20 gap-2 group relative px-4 h-10 items-center inline-flex justify-center box-border ${radius} text-sm font-medium transition-transform-colors-opacity appearance-none select-none whitespace-nowrap subpixel-antialiased tap-highlight-transparent`;

    const activeClasses = "text-textButton";

    const inactiveClasses =
      "text-foreground-600 hover:text-gray-700 dark:text-white hover:dark:text-gray-300";

    const hoverClasses = "hover:bg-bgButton hover:text-textButton";

    return `${baseClasses} ${
      isActive ? activeClasses : inactiveClasses
    } ${hoverClasses}`;
  };

  const motionProps = isActive
    ? {
        layoutId,
        className: `absolute inset-0 bg-bgButton ${radius}`,
        transition: { type: "spring", duration: 0.5 },
      }
    : {};

  const modifiedRippleProps = {
    onClick: rippleProps.onClick,
  };

  return {
    isActive,
    getClassName,
    motionProps,
    rippleProps: modifiedRippleProps,
    ripples,
  };
};
