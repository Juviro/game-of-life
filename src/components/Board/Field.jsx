import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { clickField } from '../../actions/board';

// take border width into account
const StyledField = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ isAlive }) => (isAlive ? 'black' : 'white')};
  border: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: ${({ isAlive }) => (isAlive ? '#444' : '#eee')};
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Field = ({ isAlive, size, onClick }) => {
  return <StyledField isAlive={isAlive} size={size} onClick={onClick} />;
};

const mapDispatchToProps = (dispatch, { x, y }) => ({
  onClick: () => dispatch(clickField(x, y)),
});

export default connect(null, mapDispatchToProps)(Field);
