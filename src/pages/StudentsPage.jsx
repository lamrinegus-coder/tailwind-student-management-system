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
    <div className="mb-6 rounded-2xl border border-white/10 bg-slate-800/70 p-7 shadow-xl backdrop-blur-xl">
      {/* Page Header */}
      <div className="mb-6 border-b border-white/10 pb-4">
        <h2 className="text-2xl font-semibold text-slate-100">
          Student Management
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Add, edit, search and manage registered students.
        </p>
      </div>

      {/* Student Form */}
      <StudentForm
        onSave={handleSave}
        currentStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      {/* Search */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="rounded-lg border border-sky-400/20 bg-sky-400/10 p-4 text-center font-semibold text-sky-400">
          Loading students...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-red-400">
          Error: {error}
        </div>
      )}

      {/* Students */}
      {!loading &&
        !error &&
        (filteredStudents.length > 0 ? (
          <div>
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={onDeleteStudent}
                onEdit={(student) => setEditingStudent(student)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-8 text-center">
            <p className="text-slate-400">No students found.</p>
          </div>
        ))}
    </div>
  );
}

export default StudentsPage;
