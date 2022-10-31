import React from "react";

const ColorfulMessage = (props) => {
  const styleCase1 = {
    color: props.color,
    fontSize: "2.5rem"
  };

  return (
    <>
      <p style={styleCase1}> {props.message} </p>
    </>
  );
};

export default ColorfulMessage;
