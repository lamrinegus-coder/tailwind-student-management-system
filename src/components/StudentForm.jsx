import { useState } from "react";

function StudentForm({ onSave, currentStudent, onCancel }) {
  // Store the ID of the student currently being edited to track prop changes
  const [prevStudentId, setPrevStudentId] = useState(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Synchronize state with props directly during render (no useEffect needed)
  const currentId = currentStudent ? currentStudent.id : null;
  if (currentId !== prevStudentId) {
    setPrevStudentId(currentId);
    setName(currentStudent ? currentStudent.name : "");
    setCourse(currentStudent ? currentStudent.course : "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !course.trim()) return;

    onSave({
      id: currentStudent ? currentStudent.id : Date.now(),
      name,
      course,
    });

    // Reset fields
    setName("");
    setCourse("");
    setPrevStudentId(null);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>{currentStudent ? "Edit Student" : "Add New Student"}</h3>

      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-add">
          {currentStudent ? "Update Student" : "Add Student"}
        </button>
        {currentStudent && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
