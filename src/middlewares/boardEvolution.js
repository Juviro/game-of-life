import { cloneDeep, sum } from 'lodash';

import { setBoardState } from '../actions/board';
import { evolveBoard } from '../actions/evolutions';

const RELATIVE_NEIGHBOR_POOSITIONS = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

const isValidField = (boardSize) => ([x, y]) => {
  const isInBounds = (val) => val >= 0 && val < boardSize;
  return isInBounds(x) && isInBounds(y);
};

const getNumberOfLivingNeighbors = (x, y, boardState) => {
  const boardSize = boardState[0].length;
  const relativeToAbsolutePosition = (relativeNeighborPosition) => [
    relativeNeighborPosition[0] + x,
    relativeNeighborPosition[1] + y,
  ];

  const neighbors = RELATIVE_NEIGHBOR_POOSITIONS.map(relativeToAbsolutePosition)
    .filter(isValidField(boardSize))
    .map((neighbourPos) => boardState[neighbourPos[0]][neighbourPos[1]]);

  return sum(neighbors);
};

const getNewStateForField = (x, y, boardState) => {
  const currentState = boardState[x][y];
  const numberOfLivingNeighbors = getNumberOfLivingNeighbors(x, y, boardState);

  if (
    currentState &&
    numberOfLivingNeighbors >= 2 &&
    numberOfLivingNeighbors <= 3
  ) {
    return 1;
  }
  if (!currentState && numberOfLivingNeighbors === 3) return 1;

  return 0;
};

export default (store) => (next) => (action) => {
  if (action.type === 'EVOLVE_BOARD') {
    const { board } = store.getState();
    const boardStateCopy = cloneDeep(board.state);

    boardStateCopy.forEach((row, x) =>
      row.forEach((field, y) => {
        boardStateCopy[x][y] = getNewStateForField(x, y, board.state);
      })
    );

    store.dispatch(setBoardState(boardStateCopy));

    if (board.autoplay) {
      setTimeout(() => store.dispatch(evolveBoard()), board.autoplaySpeedMs);
    }
  } else if (action.type === 'TOGGLE_AUTOPLAY') {
    const { board } = store.getState();
    next(action);
    if (board.autoplay) return;

    store.dispatch(evolveBoard());
  } else {
    next(action);
  }
};
