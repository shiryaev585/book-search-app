const BookItem = ({ books, authorName }) => {

    return ( 
        <div className='book'>
            <p>Author: {authorName}</p>
        </div>
     );
}
 
export default BookItem;