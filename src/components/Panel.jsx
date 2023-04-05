import React from "react";

const Panel = ({ children, className, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={`border rounded p-3 shadow bg-white w-full ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Panel;
