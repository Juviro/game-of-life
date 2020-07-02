import gliderGun from '../constants/gliderGun';

const DEFAULT_SIZE = 40;
const DEFAULT_SPEED = 100;

export const createBoard = (size = DEFAULT_SIZE, randomizeValues = false) => {
  const fields = [];
  const getRandomValue = () => Math.round(Math.random());

  for (let i = 0; i < size; i++) {
    fields.push([]);
    for (let j = 0; j < size; j++) {
      fields[i][j] = randomizeValues ? getRandomValue() : 0;
    }
  }

  return fields;
};

const initialState = {
  size: DEFAULT_SIZE,
  autoplay: false,
  autoplaySpeedMs: DEFAULT_SPEED,
  state: gliderGun,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARD_STATE':
      return {
        ...state,
        state: action.state,
      };
    case 'SET_BOARD_SIZE':
      return {
        ...state,
        size: action.size,
      };
    case 'TOGGLE_AUTOPLAY':
      return {
        ...state,
        autoplay: !state.autoplay,
      };
    case 'SET_AUTOPLAY_SPEED':
      return {
        ...state,
        autoplaySpeedMs: action.autoplaySpeedMs,
      };
    case 'CLEAR_BOARD':
      return {
        ...state,
        state: createBoard(state.size),
      };
    case 'RANDOMIZE_BOARD':
      return {
        ...state,
        state: createBoard(state.size, true),
      };
    default:
      return state;
  }
};
