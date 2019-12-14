import React from "react";
import Styled from 'styled-components';

const FuturisticImageContainer = Styled.div`
  background-image: linear-gradient(#71c9f8, #005fd1, #71c9f8);
`;

const FuturisticImage = Styled.img`
  width: 1100px;
  height: 723px;
  border: 1px solid black;
`;

const Image = ({imageURL}) => {
  return (
    <FuturisticImageContainer>
      <FuturisticImage src={imageURL}/>
    </FuturisticImageContainer>
  );
}

export default Image;