import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/actions/fetchBooks';
import Loader from '../Loader';
import SearchIcon from '../SearchIcon';
import './Form.scss';

const Form = (props) => {
    const [book, setBook] = useState('');
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);

    const handleChange = (event) => {
        event.preventDefault();
        setBook(event.target.value);
    };

    const searchBooks = (event) => {
        event.preventDefault();
        fetchBooks(dispatch, book);
    };

    return (
        <form className='form'>
            {props.isLoading && <Loader />}
            <input
                type='text'
                className='form__search-input'
                placeholder='Search...'
                value={book}
                onChange={handleChange}
            />
            <button className='form__search-btn' onClick={searchBooks}>
                <SearchIcon />
            </button>
        </form>
    );
};

const mapStateToProps = ({ books }) => {
    return books;
};

export default connect(mapStateToProps, { fetchBooks })(Form);
