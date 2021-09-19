import BookItem from "./BookItem";

const BooksList = ({ books }) => {
    
    return ( 
        <div className='book-list'>
            <BookItem books={books} />
        </div>
     );
}
 
export default BooksList;