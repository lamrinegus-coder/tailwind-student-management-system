import { useState } from "react";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";

function StudentsPage({
  students,
  loading,
  error,
  onSaveStudent,
  onDeleteStudent,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSave = (studentData) => {
    onSaveStudent(studentData);
    setEditingStudent(null);
  };

  return (
    <div className="page-container">
      <h2>Student Management</h2>

      <StudentForm
        onSave={handleSave}
        currentStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      <div className="controls-bar">
        <input
          type="text"
          placeholder="Search students..."
          className="input-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="status-message">Loading students...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {!loading &&
        !error &&
        (filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDeleteStudent}
              onEdit={(s) => setEditingStudent(s)}
            />
          ))
        ) : (
          <p>No students found.</p>
        ))}
    </div>
  );
}

export default StudentsPage;
