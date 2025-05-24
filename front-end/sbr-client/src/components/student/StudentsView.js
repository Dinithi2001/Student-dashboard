import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Search from '../common/Search';
import NavBar from '../common/NavBar';

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get("http://localhost:8075/students", {
        validateStatus: () => true
      });
      if (result.status === 302 || result.status === 200) {
        setStudents(result.data);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8075/students/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Inline CSS styles
  const styles = {
    fullscreen: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
    },
    contentWrapper: {
      flex: 1,
      padding: '20px',
    },
  };

  return (
    <div style={styles.fullscreen}>
      <NavBar />
      <div style={styles.contentWrapper}>
        <Search search={search} setSearch={setSearch} />
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow mt-3">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center align-middle">
              {students
                .filter(student =>
                  student.firstName.toLowerCase().includes(search.toLowerCase())
                )
                .map((student, index) => (
                  <tr key={student.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>
                      <Link to={`/student-profile/${student.id}`} className="btn btn-info">
                        <FaEye />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/edit-student/${student.id}`} className="btn btn-warning">
                        <FaEdit />
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(student.id)}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsView;
