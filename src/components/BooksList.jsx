import BookItem from './BookItem';

const BooksList = ({ books }) => {
    const data = books.books.data;
    console.log(data);

    return (
        <div className='book-list'>
            {data && <p>Books found: {data.numFound}</p>}
            {data &&
                data.docs.map((authorName, index) => {
                    return (
                        <BookItem
                            key={index}
                            books={books}
                            authorName={authorName.author_name}
                        />
                    );
                })}
        </div>
    );
};

export default BooksList;
