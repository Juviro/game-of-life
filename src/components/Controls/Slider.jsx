import React from 'react';
import { Slider } from 'antd';

import { Flex } from '../Shared';

export default ({ value, onChange, label, min, max, tipFormatter, step }) => {
  return (
    <Flex direction="column" style={{ width: 100 }} align="center">
      <span>{label}</span>
      <Slider
        style={{ width: '100%' }}
        defaultValue={value}
        onChange={onChange}
        tipFormatter={tipFormatter}
        step={step}
        min={min}
        max={max}
      />
    </Flex>
  );
};
