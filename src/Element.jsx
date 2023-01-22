import React, { useState } from 'react';

import Form from './Form';

const Element = ({ question, answer, id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm((prev) => !prev);

  const formOrButtonElement = isVisibleForm ? (
    <Form
      question={question}
      callback={toggleElements}
      answer={answer}
      id={id}
    />
  ) : (
    <button onClick={toggleElements}>Edytuj pytanie i odpowiedzi</button>
  );

  return (
    <li>
      <span>id:{id}</span>
      <p>Pytanie: {question}</p>
      <p>Odpowiedzi: {answer}</p>
  
      {formOrButtonElement}
    </li>
  );
};

export default Element;
