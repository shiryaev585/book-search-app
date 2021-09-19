import axios from 'axios';
import {
    BOOKS_ARE_LOADING,
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS,
} from './types';

export const fetchBooks = async (dispatch, value) => {
    await dispatch({ type: BOOKS_ARE_LOADING });
    try {
        const books = await axios.get(`https://openlibrary.org/search.json?q=${value}`);
        await dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
    }
    catch(error) {
        dispatch({
            type: GET_BOOKS_FAILURE,
            payload: error,
        });
        console.error(error);
    }
};
