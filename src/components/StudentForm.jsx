import { useState } from "react";

function StudentForm({ onSave, currentStudent, onCancel }) {
  const [prevStudentId, setPrevStudentId] = useState(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

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

    setName("");
    setCourse("");
    setPrevStudentId(null);
  };

  return (
    <form
      className="mb-6 rounded-xl border border-white/10 bg-slate-950/60 p-5"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-5 text-xl font-semibold text-white">
        {currentStudent ? "Edit Student" : "Add New Student"}
      </h3>

      <div className="mb-4">
        <label className="mb-1.5 block text-sm font-semibold text-slate-300">
          Student Name
        </label>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 block text-sm font-semibold text-slate-300">
          Course
        </label>

        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
        />
      </div>

      <div className="flex gap-2.5">
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 px-5 py-2.5 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          {currentStudent ? "Update Student" : "Add Student"}
        </button>

        {currentStudent && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-white/15 bg-slate-400/20 px-5 py-2.5 font-semibold text-slate-300 transition hover:bg-slate-400/30"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
