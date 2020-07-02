const DEFAULT_SIZE = 24;

const createBoard = (size = DEFAULT_SIZE, randomizeValues = false) => {
  const fields = [];
  const getRandomValue = () => Math.round(Math.random());

  for (let i = 0; i < size; i++) {
    fields.push([]);
    for (let j = 0; j < size; j++) {
      fields[i][j] = randomizeValues ? getRandomValue() : 0;
    }
  }

  // Initialize board with glider if empty
  if (!randomizeValues) {
    fields[1][2] = 1;
    fields[2][3] = 1;
    fields[3][1] = 1;
    fields[3][2] = 1;
    fields[3][3] = 1;
  }

  return fields;
};

const initialState = {
  size: DEFAULT_SIZE,
  state: createBoard(),
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
