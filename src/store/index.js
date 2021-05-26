import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';

const rootReduser = combineReducers({
  books: booksReducer,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
