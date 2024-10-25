const BookMark = ({ bookMark }) => {
    console.log(bookMark); // Check if bookMark contains 'title'
    const { title } = bookMark;

    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

export default BookMark;
