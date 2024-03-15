
import { useState } from 'react'
import './App.css'
import Courses from './components/Course/Courses'
import { useEffect } from 'react';


function App() {
  const [courses,setCourses] = useState([]);

  
  useEffect(() => {
    fetch('../public/courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])
  // console.log(courses);
  

  return (
    <>

  
   <div >
   <Courses courses={courses}></Courses>
   </div>
    </>
  )
}

export default App
