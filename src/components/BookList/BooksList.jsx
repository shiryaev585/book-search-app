import BookListItem from './BookListItem';
import './BookList.scss';

const BooksList = ({ books }) => {
    const data = books.books.data;

    if (data) {
        document.querySelector('.app').style.height = 'auto';
    }

    return (
        <div className='book-list'>
            {data && <p className='book-list__result'>Books found: {data.numFound}</p>}
            <div className='book-list__wrapper'>
                {data &&
                    data.docs.map((book, index) => {
                        return (
                            <BookListItem
                                key={index}
                                title={book.title}
                                authorName={book.author_name}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default BooksList;
