import React from 'react';

import Board from './components/Board';
import { Flex } from './components/Shared';
import { FIELD_WIDTH } from './constants/config';
import Controls from './components/Controls/Controls';

import './App.css';
import 'antd/dist/antd.css';

export default () => {
  return (
    <Flex justify="center">
      <Flex style={{ width: FIELD_WIDTH, height: '100%' }} direction="column">
        <Board />
        <Controls />
      </Flex>
    </Flex>
  );
};
