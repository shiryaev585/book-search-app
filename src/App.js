import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import BooksList from './components/BooksList';
import SearchIcon from './components/SearchIcon';
import { fetchBooks } from './store/actions/index';

function App(props) {
  const [book, setBook] = useState();

  return (
    <div className='App'>
      <h1 className='title'>Find your book</h1>
      <form className='form'>
        <input
          type='text'
          className='search-input mt-50'
          placeholder='Search...'
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button className='search-btn'><SearchIcon /></button>
      </form>

      <BooksList />
    </div>
  );
}

const mapStateToProps = ({books}) => {
  return books
}

export default connect(mapStateToProps, { fetchBooks })(App);
