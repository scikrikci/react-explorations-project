import { useRipple, RippleButton, RippleEffect } from "../utils/ripple";

const RipplePage = () => {
  const { rippleProps, ripples } = useRipple({
    color: "black",
  });

  const a = useRipple({
    color: "red",
  });

  return (
    <div className="flex flex-col justify-center w-full h-dvh items-center gap-4">
      <h1>Ripple Effect Demo</h1>

      <RippleButton className="bg-purple-600 text-white px-6 py-2 rounded-lg">
        Ripple Button Component
      </RippleButton>

      <div
        {...rippleProps}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer select-none"
      >
        Custom Element with Ripple
        <RippleEffect ripples={ripples} />
      </div>
      <div
        {...a.rippleProps}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer select-none"
      >
        Custom Element with Ripple
        <RippleEffect ripples={a.ripples} />
      </div>
    </div>
  );
};

export default RipplePage;
