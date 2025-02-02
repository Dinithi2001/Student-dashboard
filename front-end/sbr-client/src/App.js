import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import NavBar from "./components/common/NavBar.js";
import AddStudents from "./components/student/AddStudents.js";
import EditStudents from "./components/student/EditStudents.js";
import StudentProfile from "./components/student/StudentProfile.js";
import StudentsView from './components/student/StudentsView';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="container mt-5">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={<Home/>}></Route>
          <Route 
            exact 
            path="/view-students" 
            element={<StudentsView/>}></Route>
          <Route 
            exact 
            path="/add-students" 
            element={<AddStudents/>}></Route>
          <Route 
            exact 
            path="/edit-student/:id" 
            element={<EditStudents/>}></Route>
          <Route 
            exact 
            path="/student-profile/:id"
            element={<StudentProfile/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
