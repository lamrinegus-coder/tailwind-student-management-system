function StudentCard({ student, onDelete, onEdit }) {
  return (
    <div className="card-item">
      <div className="card-info">
        <h3>{student.name}</h3>
        <p>Course: {student.course}</p>
      </div>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(student)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
