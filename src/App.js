import React from 'react';
import { Provider } from 'react-redux';

import Form from './Form';
import List from './List';
import SimpleArrayOfObjectsComponent from './SimpleArrOfObj';

import store from './store/store';

import './index.css';

const App = () => {
      console.log(store.getState())
  return (
    <Provider store={store}>
      <div>
        {/* <Form />
        <p>Dodane pytania i odpowiedzi</p>
        <List /> */}
        <SimpleArrayOfObjectsComponent/>
      </div>
    </Provider>
  );
};

export default App;
