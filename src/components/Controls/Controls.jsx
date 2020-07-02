import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { Flex } from '../Shared';
import { evolveBoard, toggleAutoPlay } from '../../actions/evolutions';

const Controls = ({ onEvolveBoard, onToggleAutoPlay, autoplay }) => {
  return (
    <Flex
      width="100%"
      direction="row"
      justify="space-between"
      style={{ marginTop: 32 }}
    >
      <Button type="primary" onClick={onToggleAutoPlay}>
        {autoplay ? 'Pause' : 'Play'}
      </Button>
      <Button onClick={onEvolveBoard}>Next Step</Button>
    </Flex>
  );
};

const mapStateToProps = ({ board }) => ({ autoplay: board.autoplay });

const mapDispatchToProps = (dispatch) => ({
  onEvolveBoard: () => dispatch(evolveBoard()),
  onToggleAutoPlay: () => dispatch(toggleAutoPlay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
