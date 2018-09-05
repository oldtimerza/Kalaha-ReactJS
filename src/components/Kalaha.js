import React, { component } from "react";

export default props => {
  return (
    <div className="pit">
      <p>Kalaha</p>
      {props.children}
    </div>
  );
};
