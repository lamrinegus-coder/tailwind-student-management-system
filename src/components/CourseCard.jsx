function CourseCard({ title, studentsCount }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 transition hover:translate-x-1 hover:border-purple-400/40">
      <div>
        <h3 className="mb-1 text-lg font-semibold text-slate-50">{title}</h3>
        <p className="text-sm font-medium text-sky-400">
          Enrolled Students: {studentsCount}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
