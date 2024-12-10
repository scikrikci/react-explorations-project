import { useState, useLayoutEffect } from "react";

export const useRipple = ({
  duration = 600,
  opacity = 0.35,
  color = "rgba(255, 255, 255, 0.35)",
} = {}) => {
  const [ripples, setRipples] = useState([]);

  useLayoutEffect(() => {
    const timeouts = [];

    ripples.forEach((ripple) => {
      const timeout = setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((prevRipple) => prevRipple.id !== ripple.id)
        );
      }, duration);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [ripples, duration]);

  const createRipple = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left - radius,
      y: event.clientY - rect.top - radius,
      size: diameter,
    };

    setRipples((prevRipples) => [...prevRipples, ripple]);
  };

  const rippleStyles = {
    position: "relative",
    overflow: "hidden",
  };

  const getRippleStyle = (ripple) => ({
    position: "absolute",
    left: ripple.x,
    top: ripple.y,
    width: ripple.size,
    height: ripple.size,
    borderRadius: "50%",
    transform: "scale(0)",
    pointerEvents: "none",
    backgroundColor: color,
    opacity: opacity,
    animation: `ripple ${duration}ms linear`,
  });

  return {
    rippleProps: {
      style: rippleStyles,
      onClick: createRipple,
    },
    ripples: ripples.map((ripple) => ({
      key: ripple.id,
      style: getRippleStyle(ripple),
    })),
  };
};
