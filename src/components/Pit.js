import React, { Component } from "react";

export default props => {
  return (
    <p
      onClick={() => {
        props.makeMove(props.number);
      }}
    >
      {props.stones}
    </p>
  );
};
