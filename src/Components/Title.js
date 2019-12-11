import React from "react";

const Title = ({titleText}) => {
  if (!titleText) {
    return (
      <div>Loading...</div>
    );
  }
  else {
    return (
      <div>{titleText}</div>
    );
  }
}

export default Title;