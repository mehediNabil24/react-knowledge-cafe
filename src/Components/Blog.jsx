
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleBookMarks, handleReadTime}) => {
    // console.log(blog)
   const {title, cover,author_img,reading_time,author,posted_date,hashtags} =blog;
    return (
        <div className='mb-20 space-y-3'>
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
                    <button onClick={()=>handleBookMarks(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>{handleReadTime(reading_time)} } className='text-red-500 font-bold underline'>Mark As Read</button>
            
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func
}

export default Blog;