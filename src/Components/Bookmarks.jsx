import BookMark from "./BookMark";
import PropTypes from'prop-types'

const Bookmarks = ({bookMarks}) => {
    console.log( bookMarks)
    
    return (
        <div className="md:w-1/3 bg-gray-400 rounded-lg ml-10 ">
            <h2 className="text-3xl text-center pt-2" >Bookmarked Blogs: {bookMarks.length}</h2>
            {
                bookMarks.map(bookmark=><BookMark key={bookmark.id} bookMark={bookmark}></BookMark>)
            }
            
        </div>
    );
    BookMarks.propTypes ={
        bookMarks: PropTypes.array
       
    }
};

export default Bookmarks;