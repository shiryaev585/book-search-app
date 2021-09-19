const BooksList = ({ books }) => {
    const data = books.books.data;
    console.log(data);
    
    return ( 
        <div>
            {data && <p>Books found: {data.numFound}</p>}
            {data && data.docs.map((authorName) => {
                return <p>Author: {authorName.author_name}</p>
            })}
        </div>
     );
}
 
export default BooksList;