// import fragment react

import { Fragment } from "react";

const RippleEffect = ({ ripples }) => {
  return (
    <Fragment>
      {ripples.map(({ key, style }) => (
        <span key={key} style={style} />
      ))}
    </Fragment>
  );
};

export default RippleEffect;
