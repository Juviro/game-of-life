import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { Flex } from '../Shared';
import {
  evolveBoard,
  toggleAutoPlay,
  setAutoPlaySpeed,
} from '../../actions/evolutions';
import Slider from './Slider';
import { setBoardSize } from '../../actions/board';

const Controls = ({
  onEvolveBoard,
  onToggleAutoPlay,
  autoplay,
  autoplaySpeedMs,
  onSetAutoPlaySpeed,
  onSetBoardSize,
  size,
}) => {
  return (
    <Flex
      width="100%"
      direction="row"
      justify="space-between"
      align="center"
      style={{ marginTop: 32 }}
    >
      <Button type="primary" onClick={onToggleAutoPlay} style={{ width: 110 }}>
        {autoplay ? 'Pause' : 'Play'}
      </Button>
      <Button onClick={onEvolveBoard} style={{ width: 110 }}>
        Next Step
      </Button>
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
        max={32}
        step={4}
        label="Size"
        value={size}
      />
    </Flex>
  );
};

const mapStateToProps = ({ board }) => board;

const mapDispatchToProps = (dispatch) => ({
  onEvolveBoard: () => dispatch(evolveBoard()),
  onToggleAutoPlay: () => dispatch(toggleAutoPlay()),
  onSetAutoPlaySpeed: (autoplaySpeedMs) =>
    dispatch(setAutoPlaySpeed(autoplaySpeedMs)),
  onSetBoardSize: (size) => dispatch(setBoardSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
