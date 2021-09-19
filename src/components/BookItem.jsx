const BookItem = ({ books }) => {
    const data = books.books.data;
    console.log(data);

    return ( 
        <div className='book'>
            {data && <p>Books found: {data.numFound}</p>}
            {data && data.docs.map((authorName, index) => {
                return <p key={index}>Author: {authorName.author_name}</p>
            })}
        </div>
     );
}
 
export default BookItem;