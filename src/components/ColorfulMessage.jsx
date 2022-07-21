import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage; // import時に命名できる書き方
