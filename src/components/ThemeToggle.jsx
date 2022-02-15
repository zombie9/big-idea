import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>;
};
