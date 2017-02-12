import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './root-reducer';

// middleware
const actionLogger = theStore => next => (action) => {
  let result;

  try {
    result = next(action);
    // add store to local storage
    localStorage.setItem('theStore', JSON.stringify(theStore.getState()));
    // console.info('NEXT STATE', theStore.getState());
  } catch (e) {
    console.warn(Error('There was an error!'));
    throw (e);
  }

  return result;
};

// create store
const store = createStore(
  AppReducer,
  composeWithDevTools(
    applyMiddleware(actionLogger, thunk),
  ),
);

export default store;
