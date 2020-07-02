import React from 'react';
import { connect } from 'react-redux';

import { Flex } from '../Shared';
import { setAutoPlaySpeed } from '../../actions/evolutions';
import Slider from '../Shared/Slider/Slider';
import { setBoardSize } from '../../actions/board';

const Sliders = ({
  autoplaySpeedMs,
  onSetAutoPlaySpeed,
  onSetBoardSize,
  size,
}) => {
  return (
    <Flex width="100%" justify="space-around" style={{ marginTop: 16 }}>
      <Slider
        onChange={onSetAutoPlaySpeed}
        min={100}
        step={100}
        max={2000}
        label="Speed"
        value={autoplaySpeedMs}
        tipFormatter={(val) => `${val / 1000}s`}
      />
      <Slider
        onChange={onSetBoardSize}
        min={4}
        max={40}
        step={4}
        label="Size"
        value={size}
      />
    </Flex>
  );
};

const mapStateToProps = ({ board }) => board;

const mapDispatchToProps = (dispatch) => ({
  onSetAutoPlaySpeed: (autoplaySpeedMs) =>
    dispatch(setAutoPlaySpeed(autoplaySpeedMs)),
  onSetBoardSize: (size) => dispatch(setBoardSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
