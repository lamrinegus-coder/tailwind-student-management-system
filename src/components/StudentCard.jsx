function StudentCard({ student, onDelete, onEdit }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 transition hover:translate-x-1 hover:border-purple-400/40">
      <div>
        <h3 className="mb-1 text-lg font-semibold text-slate-50">
          {student.name}
        </h3>

        <p className="text-sm font-medium text-sky-400">
          Course: {student.course}
        </p>
      </div>

      <div className="flex gap-2.5">
        <button
          className="rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>

        <button
          className="rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-500/30"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
