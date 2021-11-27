import React from 'react';

export function StudentDetail(props) {
  const { student } = props; // stejné jako: const student = props.student;
  const initials = student.firstName[0] + student.lastName[0];
  return (
    <div className="student-detail-container">
      <div className="student-detail-initials">{initials}</div>
      <h2 className="student-detail-name">
        {student.firstName} {student.lastName}
      </h2>
    </div>
  );
}
