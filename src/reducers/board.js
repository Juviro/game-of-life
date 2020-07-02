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
  boardState: getEmptyBoard(),
};

export default (state = initialState) => {
  return state;
};
