import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addQuestionAndAnswers, editQuestionAndAnswers } from './actions/appActions';

const Form = ({
  question = '',
  answer = '',
  callback,
  id,
}) => {
  const [questionInput, setquestionInput] = useState(question);
  const [answerInput, setAnswerInput] = useState(answer);

  const dispatch = useDispatch();

  const handleChangeQuestion = event =>
  setquestionInput(event.target.value);

  const handleAnswerChange = event =>
  setAnswerInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const questionObject = {
      question: questionInput,
      answer: answerInput,
      id,
    };

    id 
      ? dispatch(editQuestionAndAnswers(questionObject))
      : dispatch(addQuestionAndAnswers(questionObject));

    if (id) {
      callback();
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Pytanie:
          <input
            onChange={handleChangeQuestion}
            type="text"
            value={questionInput} 
          />
        </label>
      </div>
      <div>
        <label>
          Odpowiedź:
          <input
            onChange={handleAnswerChange}
            type="text"
            value={answerInput} 
          />
        </label>
      </div>
      <button type="submit">
        {id ? 'Edycja pytania i odpowiedzi' : 'Dodaj pytanie i odpowiedzi'}
      </button>
    </form>
  );
};

export default Form;