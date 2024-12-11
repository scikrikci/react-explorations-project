const RippleEffect = ({ ripples }) => (
  <span
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      borderRadius: "inherit",
    }}
  >
    {ripples.map(({ key, style }) => (
      <div key={key} style={style} />
    ))}
  </span>
);

export default RippleEffect;
