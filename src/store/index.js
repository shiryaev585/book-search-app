import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReduser from './reducers/booksReduser';

const rootReduser = combineReducers({
  booksReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
