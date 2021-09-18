import axios from 'axios';
import {
    BOOKS_ARE_LOADING,
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS,
} from './types';

export const fetchBooks = async (dispatch) => {
    console.log('fetchBooks START');
    await dispatch({ type: BOOKS_ARE_LOADING });
    try {
        const books = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback`);
        await dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
        console.log(books);
    }
    catch(error) {
        dispatch({
            type: GET_BOOKS_FAILURE,
            payload: error,
        });
        console.error(error);
    }
};
