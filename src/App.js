import React, { useState } from 'react';
import Button from './components/Button';
import { Home } from './pages/Home';
import { StudentDetail } from './pages/StudentDetail';
import examsImage from './exams.svg';

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="app">
      <img src={examsImage} alt="exams" />
      <main>
        {selectedStudent ? (
          <>
            <Button onClick={() => setSelectedStudent(null)}>Zpět</Button>
            <StudentDetail student={selectedStudent} />
          </>
        ) : (
          <Home onStudentClick={(student) => setSelectedStudent(student)} />
        )}
      </main>
    </div>
  );
};

export default App;
