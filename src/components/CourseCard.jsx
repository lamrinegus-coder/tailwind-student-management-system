function CourseCard({ title, studentsCount }) {
  return (
    <div className="card-item">
      <div className="card-info">
        <h3>{title}</h3>
        <p>Enrolled Students: {studentsCount}</p>
      </div>
    </div>
  );
}

export default CourseCard;
