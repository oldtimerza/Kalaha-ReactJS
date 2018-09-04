import React, { Component } from "react";

import Pit from "./Pit";
import Kalaha from "./Kalaha";

export default props => {
  const { pits, kalahas, makeMove } = props;
  return (
    <div>
      {pits.map(pit => {
        if (kalahas) {
          for (var kalaha of kalahas) {
            if (kalaha.pitNumber && kalaha.pitNumber == pit.pitNumber) {
              return (
                <Kalaha key={kalaha.pitNumber}>
                  <Pit
                    key={pit.pitNumber}
                    stones={pit.numberOfStones}
                    number={pit.pitNumber}
                    makeMove={makeMove}
                  />
                </Kalaha>
              );
            }
          }
        }
        return (
          <Pit
            key={pit.pitNumber}
            stones={pit.numberOfStones}
            number={pit.pitNumber}
            makeMove={makeMove}
          />
        );
      })}
    </div>
  );
};
