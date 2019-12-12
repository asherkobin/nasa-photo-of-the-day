import React from "react";
import Styled from 'styled-components';

const FuturisticCaptionContainer = Styled.div`
  background-image: linear-gradient(#71c9f8, #005fd1);
  text-align: center;
`;

const FuturisticCaption = Styled.div`
  width: 1100px;
  border: 1px solid black;
  display: inline-block;
  background-color: white;
  font-family: 'Titillium Web';
`;

const Caption = ({captionText}) => {
  return (
    <FuturisticCaptionContainer>
      <FuturisticCaption>{captionText}</FuturisticCaption>
    </FuturisticCaptionContainer>
  );
}

export default Caption;