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
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950 text-slate-50">
      <div className="mx-auto max-w-275 px-5 py-7.5">
        {/* Header */}
        <header className="mb-6 rounded-2xl border border-white/15 bg-white/8 p-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent">
                Student Management System
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Manage students and courses easily
              </p>
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
              Admin
            </div>
          </div>
        </header>

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Dashboard */}
          <Route
            path="/"
            element={
              <Dashboard
                studentCount={students.length}
                courseCount={courses.length}
              />
            }
          />

          {/* Students */}
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

          {/* Courses */}
          <Route path="/courses" element={<CoursesPage courses={courses} />} />

          {/* Settings */}
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
