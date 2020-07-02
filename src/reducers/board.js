const DEFAULT_SIZE = 16;

const getEmptyBoard = (size = DEFAULT_SIZE) => {
  const fields = [];
  for (let i = 0; i < size; i++) {
    fields.push([]);
    for (let j = 0; j < size; j++) {
      fields[i][j] = 0;
    }
  }
  return fields;
};

const initialState = {
  size: DEFAULT_SIZE,
  state: getEmptyBoard(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD_STATE':
      return {
        ...state,
        state: action.newState,
      };
    default:
      return state;
  }
};
