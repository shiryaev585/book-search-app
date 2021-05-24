import './App.css';
import BooksList from './components/BooksList';
import SearchIcon from './components/SearchIcon';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Find your book</h1>
      <form className='form'>
        <input
          type='text'
          className='search-input mt-50'
          placeholder='Search...'
        />
        <button className='search-btn'><SearchIcon /></button>
      </form>

      <BooksList />
    </div>
  );
}

export default App;
