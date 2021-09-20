import './BookList.scss';

const BookListItem = ({ title, authorName }) => {
    return ( 
        <div className='book'>
            <p className='book__title'>{title}</p>
            <p className='book__author'>{authorName}</p>
        </div>
     );
}
 
export default BookListItem;