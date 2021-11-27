import React from 'react';
import Students from '../components/Students';

export function Home(props) {
  return <Students onStudentClick={props.onStudentClick} />;
}
