import React from 'react';
import { useSelector } from 'react-redux';

import Element from './Element';

const List = () => {
  const quizItems = useSelector((store) => store.quizItems);
  // console.log(quizItems, 'state ze store')
  const  quizElements = quizItems.map((quizItem) => (
    <Element key={quizItem.id} {...quizItem} />
  ));

  return <ul>{quizElements}</ul>;
};

export default List;
