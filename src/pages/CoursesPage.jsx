import CourseCard from "../components/CourseCard";

function CoursesPage({ courses }) {
  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-slate-800/70 p-7 shadow-xl backdrop-blur-xl">
      <h2 className="mb-6 border-b border-white/10 pb-3 text-2xl font-semibold text-slate-100">
        Course List
      </h2>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          studentsCount={course.studentsCount}
        />
      ))}
    </div>
  );
}

export default CoursesPage;
