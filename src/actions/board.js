export const clickField = (x, y) => ({
  type: 'CLICK_FIELD',
  x,
  y,
});

export const setBoardState = (state) => ({
  type: 'SET_BOARD_STATE',
  state,
});

export const setBoardSize = (size) => ({
  type: 'SET_BOARD_SIZE',
  size,
});
