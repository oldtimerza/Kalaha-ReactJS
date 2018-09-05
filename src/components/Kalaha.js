import React, { component } from "react";

export default props => {
  return (
    <div
      className="pit"
      onClick={() => {
        props.makeMove(props.number);
      }}
    >
      <p>{"Player " + props.owningPlayerIndex}</p>
      {props.stones}
    </div>
  );
};
