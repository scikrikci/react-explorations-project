import { useRipple } from "./../hooks/useRipple";
import RippleEffect from "./RippleEffect";

export const RippleButton = ({ children, className = "", ...props }) => {
  const { rippleProps, ripples } = useRipple();

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      {...rippleProps}
      {...props}
    >
      {children}
      <RippleEffect ripples={ripples} />
    </button>
  );
};
