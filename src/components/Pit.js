import React, { Component } from "react";

export default props => {
  return (
    <div
      className="pit"
      onClick={() => {
        props.makeMove(props.number);
      }}
    >
      {props.stones}
    </div>
  );
};
