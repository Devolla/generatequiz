import React from 'react';
import { Provider } from 'react-redux';

import Form from './Form';
import List from './List';

import store from './store/store';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <p>Dodane pytania i odpowiedzi</p>
        <List />
      </div>
    </Provider>
  );
};

export default App;
