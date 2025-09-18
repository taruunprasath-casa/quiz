
import './App.css'
import LoginPage from './components/LoginPage'
import TeacherDash from './components/TeacherDash';
import StudentDash from './components/StudentDash';
import './Styles/LoginPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/studentDash" element ={<StudentDash/>}/>
        <Route path="/teacherDash" element ={<TeacherDash/>}/>
      </Routes>
      
    </Router>

  
      
    </>
  )
}

export default App
