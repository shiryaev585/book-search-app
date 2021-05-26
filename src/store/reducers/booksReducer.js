import {
  BOOKS_ARE_LOADING,
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
} from '../actions/types';

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_ARE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
