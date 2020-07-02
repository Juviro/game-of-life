import React from 'react';
import styled from 'styled-components';

// take border width into account
const StyledField = styled.div`
  width: ${({ size }) => `calc(${size} - 2px)`};
  height: ${({ size }) => `calc(${size} - 2px)`};
  background-color: ${({ isAlive }) => (isAlive ? 'black' : 'white')};
  border: 1px solid #eee;
`;

export default ({ isAlive, size }) => {
  return <StyledField isAlive={isAlive} size={size} />;
};
