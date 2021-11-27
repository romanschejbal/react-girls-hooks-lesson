import React, { useState } from 'react';
import { Maybe } from '../components/Maybe';
import { Button } from '../components/Button';
import { useGetJSON } from '../hooks/useGetJSON';

export function StudentDetail(props) {
  const { student } = props;
  const initials = student.firstName[0] + student.lastName[0];

  const [editMode, setEditMode] = useState(false);

  const { data, loading } = useGetJSON(
    'http://18.157.77.111/students/' + student.id
  );

  return (
    <div className="student-detail-container">
      <div className="student-detail-initials">{initials}</div>
      {editMode ? (
        <>
          <label>Jméno:</label>
          <input type="text" value={student.firstName} />
        </>
      ) : (
        <h2 className="student-detail-name">
          {student.firstName} {student.lastName}
        </h2>
      )}
      {loading ? (
        <p>Načítám...</p>
      ) : (
        <p>
          <Maybe fallback="Chybí description">{data.description}</Maybe>
        </p>
      )}
      <Button onClick={() => setEditMode(true)}>Upravit</Button>
    </div>
  );
}
