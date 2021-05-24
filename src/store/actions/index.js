import axios from 'axios';
import { BOOKS_ARE_LOADING, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS } from './types';

export const fetchBooks = (value) => dispatch => {
    dispatch({ type: BOOKS_ARE_LOADING });
    axios.get(`http://openlibrary.org/search.json?q=${value}`)
    .then(response => dispatch({ type: GET_BOOKS_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: GET_BOOKS_FAILURE, payload: error.response.data.error.message }))
}