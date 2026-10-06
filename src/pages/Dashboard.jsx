function Dashboard({ studentCount, courseCount }) {
  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-slate-800/70 p-7 shadow-xl backdrop-blur-xl">
      <h2 className="mb-6 border-b border-white/10 pb-3 text-2xl font-semibold text-slate-100">
        Dashboard Overview
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
          <p className="text-sm font-medium text-slate-400">
            Total Registered Students
          </p>

          <p className="mt-2 text-4xl font-bold text-sky-400">{studentCount}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
          <p className="text-sm font-medium text-slate-400">Active Courses</p>

          <p className="mt-2 text-4xl font-bold text-purple-400">
            {courseCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
