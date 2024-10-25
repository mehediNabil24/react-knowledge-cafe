
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleBookMarks}) => {
    console.log(blog)
   const {title, cover,author_img,reading_time,author,posted_date} =blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between mt-8 mb-4'>
                <div className='flex '>
                    <img className='w-[60px] ' src={author_img} alt="" />
                    <div className='ml-2'>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleBookMarks} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}

export default Blog;