import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import SettingsPage from "./pages/SettingsPage";
import { fetchStudents } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [courses] = useState([
    { id: 101, title: "React Development", studentsCount: 15 },
    { id: 102, title: "JavaScript Fundamentals", studentsCount: 22 },
    { id: 103, title: "Python Programming", studentsCount: 18 },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents()
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSaveStudent = (studentData) => {
    const exists = students.some((s) => s.id === studentData.id);
    if (exists) {
      setStudents(
        students.map((s) => (s.id === studentData.id ? studentData : s)),
      );
    } else {
      setStudents([...students, studentData]);
    }
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Student Management System</h1>
      </header>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              studentCount={students.length}
              courseCount={courses.length}
            />
          }
        />
        <Route
          path="/students"
          element={
            <StudentsPage
              students={students}
              loading={loading}
              error={error}
              onSaveStudent={handleSaveStudent}
              onDeleteStudent={handleDeleteStudent}
            />
          }
        />
        <Route path="/courses" element={<CoursesPage courses={courses} />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
