import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  if ([action.type].includes(result.type)) {
    localStorage.setItem('todo', JSON.stringify(getState()));
  }
  return result;
};

const LoadStore = () => {
  const data = localStorage.getItem('todo');
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

const store = createStore(
  rootReducer,
  LoadStore(),
  applyMiddleware(
    thunk,
    localStorageMiddleware,
  ),
);

export default store;
