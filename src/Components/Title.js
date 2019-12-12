import React from "react";
import Styled from 'styled-components';

const FuturisticTitle = Styled.div`
  font-family: F1;
  font-size: 3rem;
  background-image: linear-gradient(#005fd1, #71c9f8);
`;

const Title = ({titleText}) => {
  if (!titleText) {
    return (
      <FuturisticTitle>Loading...</FuturisticTitle>
    );
  }
  else {
    return (
      <FuturisticTitle>{titleText}</FuturisticTitle>
    );
  }
}

export default Title;