import { applyMiddleware, createStore } from 'redux';

import { validateQuestionMiddleware } from '../middleware/validateQuestionMiddleware';
import { rootReducer } from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(validateQuestionMiddleware)
);

export default store;