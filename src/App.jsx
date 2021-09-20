import { useSelector } from 'react-redux';
import './App.scss';
import BooksList from './components/BookList/BooksList';
import Form from './components/Form';

const App = () => {
    const books = useSelector((state) => state.books);

    return (
        <div className='app'>
            <h1 className='title'>Find your book</h1>
            <Form />
            <BooksList books={books} />
        </div>
    );
};

export default App;
