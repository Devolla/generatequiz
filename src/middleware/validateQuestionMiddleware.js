import { ADD } from '../actions/appActions';

export const validateQuestionMiddleware = ({dispatch}) => next => (action) => {
  if (action.type === ADD && !action.payload.question.length) {
    console.warn('Brak pytania');
    return;
  }

  next(action);
};