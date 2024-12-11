import { useState,useEffect } from 'react'
import './styles/App.scss'
import Loader from './components/Loader';
import CourseTable from './components/Coursetable';
import { getCourses } from './api/CourseApi';
function App() {

const [courses, setcourses] = useState([]);
const [loading, setloading] = useState(true);

useEffect(() => {
  const fec=async()=>{
    const data = await getCourses();
    setcourses (data);
    setloading(false)
  };
  fec();
}, [])


  return (
    
   <div className="app">
      <h1>Course Table</h1>
     {loading ? <Loader/> : <CourseTable courses={courses}/>}
    </div>
  
    
  )
}

export default App
