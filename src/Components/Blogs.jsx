import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookMarks}) => {
    const [blogs, setBlogs] =useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
         .then(data =>setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl">Blogs: {blogs.length} </h2>
            {
                blogs.map(blog=>(<Blog key={blog.id}
                    handleBookMarks={handleBookMarks}
                     blog={blog}></Blog>))
            }
            
        </div>
    );

    Blogs.propTypes ={
        handleBookMarks: PropTypes.func.isRequired
    }
};

export default Blogs;