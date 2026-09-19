import CourseCard from "../components/CourseCard";

function CoursesPage({ courses }) {
  return (
    <div className="page-container">
      <h2>Course List</h2>
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
