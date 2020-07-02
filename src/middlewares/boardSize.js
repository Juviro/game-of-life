import { setBoardState } from '../actions/board';
import { createBoard } from '../reducers/board';

export default (store) => (next) => (action) => {
  if (action.type === 'SET_BOARD_SIZE') {
    const { size } = action;
    const {
      board: { state: oldBoard, size: oldSize },
    } = store.getState();
    const newBoard = createBoard(size);

    const minSize = Math.min(size, oldSize);

    // preserve existing nodes
    for (let i = 0; i < minSize; i++) {
      for (let j = 0; j < minSize; j++) {
        newBoard[i][j] = oldBoard[i][j];
      }
    }

    store.dispatch(setBoardState(newBoard));
  }
  next(action);
};
