import { cloneDeep } from 'lodash';

import { setBoardState } from '../actions/board';

const invert = (previous) => (previous ? 0 : 1);

export default (store) => (next) => (action) => {
  if (action.type === 'CLICK_FIELD') {
    const { x, y } = action;
    const { board } = store.getState();
    const boardStateCopy = cloneDeep(board.state);
    boardStateCopy[x][y] = invert(boardStateCopy[x][y]);

    store.dispatch(setBoardState(boardStateCopy));
  } else {
    next(action);
  }
};
