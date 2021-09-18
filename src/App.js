import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import BooksList from './components/BooksList';
import SearchIcon from './components/SearchIcon';
import Loader from './components/Loader';
import { fetchBooks } from './store/actions/fetchBooks';

const App = (props) => {
    console.log('PROPS - ', props);
    const [book, setBook] = useState();
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    const handleChange = (event) => {
      event.preventDefault();
      setBook(event.target.value);
      console.log(event.target.value);
    };

    const searchBooks = (event) => {
        event.preventDefault();
        fetchBooks(dispatch);
    };

    return (
        <>
            {props.isLoading && <Loader />}
            <div className='App'>
                <h1 className='title'>Find your book</h1>
                <form className='form'>
                    <input
                        type='text'
                        className='search-input mt-50'
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

                <BooksList />
            </div>
        </>
        
    );
};

const mapStateToProps = ({ books }) => {
    return books;
};

export default connect(mapStateToProps, { fetchBooks })(App);
