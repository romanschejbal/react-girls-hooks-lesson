import React, { useState } from 'react';
import { Maybe } from '../components/Maybe';
import { Button } from '../components/Button';
import { useGetJSON } from '../hooks/useGetJSON';
import { Field, Form, Formik } from 'formik';

export function StudentDetail(props) {
  const [editMode, setEditMode] = useState(false);

  const { data, loading, refetch } = useGetJSON(
    'http://18.157.77.111/students/' + props.student.id
  );

  const student = data;

  if (loading) {
    return <p>Načítám student data...</p>;
  }

  const initials = student.firstName[0] + student.lastName[0];

  return (
    <div className="student-detail-container">
      <div className="student-detail-initials">{initials}</div>
      {editMode ? (
        <Formik
          initialValues={student}
          onSubmit={(values) => {
            fetch('http://18.157.77.111/students/' + student.id, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values),
            }).then((response) => {
              if (response.ok) {
                setEditMode(false);
                refetch();
              }
            });
          }}
        >
          <Form className="flex flex-col gap-1">
            <Field name="firstName" type="text" className="input" />
            <Field name="lastName" type="text" className="input" />
            <Field name="gender" type="text" className="input" />
            <Field name="house" type="text" className="input" />
            <Field name="year" type="number" className="input" />
            <button type="submit" className="input">
              Submit
            </button>
          </Form>
        </Formik>
      ) : (
        <>
          <h2 className="student-detail-name">
            {student.firstName} {student.lastName}
          </h2>
          <p>{student.house}</p>
          <p>{student.year}</p>
        </>
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
