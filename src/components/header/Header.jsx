import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeaderText = styled.code`
  display: block;
  transition: transform 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const SmallText = styled.p`
  font-size: small;
`;

const tagLine = "[what's the]";

export const Header = () => {
  return (
    <StyledHeader>
      <SmallText>{tagLine}</SmallText>
      <HeaderText>big idea?</HeaderText>
    </StyledHeader>
  );
};
