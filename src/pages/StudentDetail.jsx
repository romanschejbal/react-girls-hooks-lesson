import React from 'react';
import { Maybe } from '../components/ Maybe';
import { useGetJSON } from '../hooks/useGetJSON';

export function StudentDetail(props) {
  const { student } = props;
  const initials = student.firstName[0] + student.lastName[0];

  const { data, loading } = useGetJSON(
    'http://18.157.77.111/students/' + student.id
  );

  return (
    <div className="student-detail-container">
      <div className="student-detail-initials">{initials}</div>
      <h2 className="student-detail-name">
        {student.firstName} {student.lastName}
      </h2>
      {loading ? (
        <p>Načítám...</p>
      ) : (
        <p>
          <Maybe fallback="Chybí description">{data.description}</Maybe>
        </p>
      )}
    </div>
  );
}
