import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTabButton } from "../hooks/useTabButton";
import { RippleEffect } from "../utils/ripple";

const TabButton = ({
  children,
  to,
  layoutId,
  radius = "rounded-md",
  rippleDisabled = false,
  rippleColor = "red",
  rippleDuration = 600,
  rippleOpacity = 0.35,
}) => {
  const { isActive, getClassName, motionProps, rippleProps, ripples } =
    useTabButton(
      to,
      layoutId,
      radius,
      rippleDisabled,
      rippleColor,
      rippleDuration,
      rippleOpacity
    );

  return (
    <Link {...rippleProps} to={to} className={getClassName()} draggable="false">
      {isActive && <motion.div {...motionProps} />}
      <span className="relative z-10">{children}</span>
      <RippleEffect ripples={ripples} />
    </Link>
  );
};

export default TabButton;
