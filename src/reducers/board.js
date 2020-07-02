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

  // Initialize board with element if empty
  if (!randomizeValues) {
    fields[10][10] = 1;
    fields[11][10] = 1;

    fields[9][11] = 1;
    fields[12][11] = 1;

    fields[10][12] = 1;
    fields[11][12] = 1;
    fields[12][12] = 1;
  }

  return fields;
};

const initialState = {
  size: DEFAULT_SIZE,
  autoplay: false,
  autoplaySpeedMs: 100,
  state: createBoard(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD_STATE':
      return {
        ...state,
        state: action.newState,
      };
    case 'TOGGLE_AUTOPLAY':
      return {
        ...state,
        autoplay: !state.autoplay,
      };
    default:
      return state;
  }
};
