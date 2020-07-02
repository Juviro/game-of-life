import { compose, applyMiddleware } from 'redux';

import boardSelection from './boardSelection';
import boardEvolution from './boardEvolution';

const middlewares = [boardSelection, boardEvolution];

export default compose(
  applyMiddleware(...middlewares),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x
);
