const BookItem = ({ books }) => {
    const data = books.books.data;
    console.log(data);

    return ( 
        <div className='book'>
            <p>Author: {data.docs.author_name}</p>
        </div>
     );
}
 
export default BookItem;