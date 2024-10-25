
import './App.css'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Bookmarks from './Components/Bookmarks'
import { useState } from 'react'



 function App() {

  const [bookMarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] =useState(0)


  const handleBookMarks = blog =>{
    const newBookMarks = [...bookMarks,blog]
    setBookMarks(newBookMarks)
  }

  const handleReadTime = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // remove book from bookmarks
    
    const remainingBooks = bookMarks.filter(bookmark=>bookmark.id!==id)
    setBookMarks(remainingBooks);
  }



  

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks} handleReadTime={handleReadTime}  ></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App ;
