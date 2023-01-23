import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteQuestionAndAnswers } from './actions/appActions';
import Form from './Form';

const Element = ({ question, answer, id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const toggleElements = () => setIsVisibleForm((prev) => !prev);

  const [isElementDeleted, setIsElementDeleted] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteBtn = event => {
    event.preventDefault();
    // console.log(id)
    setIsElementDeleted(true);
    const elementId = id;
    dispatch(deleteQuestionAndAnswers(elementId))
  }

  const formOrButtonElement = isVisibleForm ? (
    <Form
      question={question}
      callback={toggleElements}
      answer={answer}
      id={id}
    />
  ) : (
    <>
     <button onClick={toggleElements}>Edytuj pytanie i odpowiedzi</button>
    <button onClick={handleDeleteBtn}>Usuń</button>
    </>
  );

  const isElementToRender = isElementDeleted ? (
  ''
  ) : (
    <li>
    <span>id:{id}</span>
    <p>Pytanie: {question}</p>
    <p>Odpowiedzi: {answer}</p>

    {formOrButtonElement}
  </li>
  );

  return (
    isElementToRender
  );
};

export default Element;
