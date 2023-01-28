export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addQuestionAndAnswers = ({question, answer}) => ({
  type: ADD,
  payload: {
    question,
    answer,
    id: Math.floor(Math.random() * 1234)
  }
});

export const deleteQuestionAndAnswers = id => ({
  type: DELETE,
  payload: {
    id,
  }
});

export const editQuestionAndAnswers = ({question, answer, id}) => ({
  type: EDIT,
  payload: {
    question,
    answer,
    id,
  }
});
