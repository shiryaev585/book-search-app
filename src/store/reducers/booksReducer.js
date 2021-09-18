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
        isLoading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoading: false,
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default booksReducer;
