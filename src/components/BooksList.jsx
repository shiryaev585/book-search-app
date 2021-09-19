import BookItem from "./BookItem";

const BooksList = ({ books }) => {
    const data = books.books.data;
    
    return ( 
        <div className='book-list'>
            {data && <p>Books found: {data.numFound}</p>}
            {data && data.docs.map((index) => <BookItem key={index} books={books} />)}
        </div>
     );
}
 
export default BooksList;