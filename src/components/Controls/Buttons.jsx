import React from 'react';
import { Button, Space } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Flex } from '../Shared';
import { evolveBoard, toggleAutoPlay } from '../../actions/evolutions';
import { clearBoard, randomizeBoard } from '../../actions/board';

const StyledButton = styled(Button)`
  width: 110px;
`;

const Buttons = ({
  onEvolveBoard,
  onToggleAutoPlay,
  autoplay,
  onClearBoard,
  onRandomizeBoard,
}) => {
  return (
    <Flex
      width="100%"
      direction="row"
      justify="space-between"
      align="center"
      style={{ marginTop: 32 }}
    >
      <Space>
        <StyledButton type="primary" onClick={onToggleAutoPlay}>
          {autoplay ? 'Pause' : 'Play'}
        </StyledButton>
        <StyledButton onClick={onEvolveBoard}>Next Step</StyledButton>
      </Space>
      <Space>
        <StyledButton onClick={onClearBoard}>Clear</StyledButton>
        <StyledButton onClick={onRandomizeBoard}>Random</StyledButton>
      </Space>
    </Flex>
  );
};

const mapStateToProps = ({ board }) => board;

const mapDispatchToProps = (dispatch) => ({
  onEvolveBoard: () => dispatch(evolveBoard()),
  onToggleAutoPlay: () => dispatch(toggleAutoPlay()),
  onClearBoard: () => dispatch(clearBoard()),
  onRandomizeBoard: () => dispatch(randomizeBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
