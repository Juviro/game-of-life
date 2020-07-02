export const clickField = (x, y) => ({
  type: 'CLICK_FIELD',
  x,
  y,
});

export const setBoardState = (newState) => ({
  type: 'SET_BOARD_STATE',
  newState,
});
