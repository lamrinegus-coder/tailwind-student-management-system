function Dashboard({ studentCount, courseCount }) {
  return (
    <div className="page-container">
      <h2>Dashboard Overview</h2>
      <p>Total Registered Students: {studentCount}</p>
      <p>Active Courses: {courseCount}</p>
    </div>
  );
}

export default Dashboard;
