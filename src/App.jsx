
import './App.css'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Bookmarks from './Components/Bookmarks'
import { useState } from 'react'



function App() {

  const [bookMarks, setBookMarks] = useState([])

  const handleBookMarks = blog =>{
    console.log("bookmark adding soon")
  }
  

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks}  ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
