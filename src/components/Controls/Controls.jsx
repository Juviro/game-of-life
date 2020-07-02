import React from 'react';

import { Flex } from '../Shared';
import Sliders from './Sliders';
import Buttons from './Buttons';

export default () => {
  return (
    <Flex width="100%" direction="column">
      <Buttons />
      <Sliders />
    </Flex>
  );
};
