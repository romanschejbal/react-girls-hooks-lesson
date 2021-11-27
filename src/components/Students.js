import React, { useEffect, useState } from 'react';
import Student from './Student';

const Students = (props) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    fetch('http://18.157.77.111/students')
      .then((response) => response.json())
      .then((json) => {
        setStudents(json);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Načítám...</div>;
  }

  return (
    <ul>
      {students.map((student) => {
        const isThisFemale = student.gender === 'F';
        const initials = `${student.firstName.charAt(
          0
        )}${student.lastName.charAt(0)}`;

        return (
          <Student
            key={student.id}
            isThisFemale={isThisFemale}
            firstName={student.firstName}
            lastName={student.lastName}
            house={student.house}
            initials={initials}
            onClick={() => {
              props.onStudentClick(student);
            }}
          />
        );
      })}
    </ul>
  );
};

export default Students;
