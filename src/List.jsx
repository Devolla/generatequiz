import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

import Element from './Element';

const List = () => {
  const quizItems = useSelector((store) => store.quizItems);
  // console.log(quizItems, 'state ze store')
  // const myStringifiedObject = JSON.stringify(quizItems);
  // console.log(myStringifiedObject, 'myStringifiedObject')
  // console.log(quizElements, 'quizElements')

const sendQuizData = () => {
  console.log(quizItems, 'state ze store')
  axios.get('https://catfact.ninja/fact', quizItems)
  .then(response => console.log(response));
}
 
  const quizElements = quizItems.map((quizItem) => (
    <Element key={quizItem.id} {...quizItem} />
  ));

  // console.log(quizElements.length, 'quizElements')

  return quizElements.length > 0 ? <>
  <ul>{quizElements}</ul>
  <button onClick={sendQuizData}>Zapisz listę</button>
  </> :
  ''
};

export default List;
