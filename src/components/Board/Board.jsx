import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Field from './Field';
import { FIELD_WIDTH } from '../../constants/config';
import { Flex } from '../Shared';

const StyledBoard = styled(Flex)`
  width: ${FIELD_WIDTH}px;
  height: ${FIELD_WIDTH}px;
  border: 1px solid #eee;
`;

const Board = ({ size, boardState }) => {
  const fieldSize = `${100 / size}%`;
  return (
    <StyledBoard direction="row" wrap="wrap">
      {boardState.map((row, x) =>
        row.map((isAlive, y) => (
          <Field
            // we can use indices + size as keys since we never re-arrange the board unless the size changes
            // eslint-disable-next-line react/no-array-index-key
            key={`${x};${y};${size}`}
            x={x}
            y={y}
            isAlive={isAlive}
            size={fieldSize}
          />
        ))
      )}
    </StyledBoard>
  );
};

const mapStateToProps = ({ board }) => board;

export default connect(mapStateToProps)(Board);
