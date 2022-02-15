import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Box = styled.div`
  padding: 1rem 2rem 1.5rem 2rem;
  background: ${({ theme }) => theme.panel};
  width: 50%;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
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
      <Box>
        <SmallText>{tagLine}</SmallText>
        <HeaderText>big idea</HeaderText>
      </Box>
    </StyledHeader>
  );
};
