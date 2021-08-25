import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import BooksList from './components/BooksList';
import SearchIcon from './components/SearchIcon';
import { fetchBooks } from './store/actions/index';

const App = (props) => {
    const [book, setBook] = useState();

    const handleChange = (event) => {
      event.preventDefault();
      setBook(event.target.value);
      console.log(event.target.value);
    };

    const searchBooks = (event) => {
        event.preventDefault();
        console.log('DFSJFSJ');
        fetchBooks();
    };

    return (
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
    );
};

const mapStateToProps = ({ books }) => {
    return books;
};

export default connect(mapStateToProps, { fetchBooks })(App);
