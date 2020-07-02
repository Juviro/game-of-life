import React from 'react';
import styled from 'styled-components';

import Board from './components/Board';
import './App.css';
import { FIELD_WIDTH } from './constants/config';
import { Flex } from './components/Shared';

const StyledApp = styled.div`
  height: 100%;
  width: ${FIELD_WIDTH}px;
`;

export default () => {
  return (
    <Flex justify="center">
      <StyledApp>
        <Board />
      </StyledApp>
    </Flex>
  );
};
