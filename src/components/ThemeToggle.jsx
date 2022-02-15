import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>;
};
