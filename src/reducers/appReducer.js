import {
    ADD, EDIT, DELETE
  } from '../actions/appActions';
  
  export const appReducer = (state = [], action) => {
    console.log('Nowy stan aplikacji')
    switch (action.type) {
      case ADD:
        return [ ...state, action.payload];
      case EDIT:
        return state.map(currentStateElement => {
          if (currentStateElement.id !== action.payload.id) {
            return currentStateElement;
          }
  
          const { question, answer } = action.payload;  
  
          return ({
            question,
            answer,
            id: currentStateElement.id,
          });
        });
      case DELETE:
        return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
      
      default:
        console.warn(`Brak akcji typu: ${action.type}`);
        return state;
    }
  }