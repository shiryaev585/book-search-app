import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import BooksList from './components/BooksList';
import SearchIcon from './components/SearchIcon';
import Loader from './components/Loader';
import { fetchBooks } from './store/actions/fetchBooks';

const App = (props) => {
    const [book, setBook] = useState('');
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    const handleChange = (event) => {
      event.preventDefault();
      setBook(event.target.value);
    };

    const searchBooks = (event) => {
        event.preventDefault();
        fetchBooks(dispatch, book);
    };

    return (
        <div className='App'>
                <h1 className='title'>Find your book</h1>
                <form className='form'>
                {props.isLoading && <Loader />}
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Search...'
                        value={book}
                        onChange={handleChange}
                    />
                    <button
                        className='search-btn'
                        onClick={searchBooks}
                    >
                        <SearchIcon />
                    </button>
                </form>

                <BooksList books={books} />
            </div>
    );
};

const mapStateToProps = ({ books }) => {
    return books;
};

export default connect(mapStateToProps, { fetchBooks })(App);
