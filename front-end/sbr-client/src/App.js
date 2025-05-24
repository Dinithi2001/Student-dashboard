import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddStudents from "./components/student/AddStudents.js";
import EditStudents from "./components/student/EditStudents.js";
import StudentProfile from "./components/student/StudentProfile.js";
import StudentsView from './components/student/StudentsView';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route exact path="/view-students" element={<StudentsView />} />

        <Route 
          exact 
          path="/add-students" 
          element={<AddStudents />}
        />
        <Route 
          exact 
          path="/edit-student/:id" 
          element={<EditStudents />} 
        />
        <Route 
          exact 
          path="/student-profile/:id"
          element={<StudentProfile />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
