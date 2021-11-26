import React, { useState } from 'react';
import Button from './components/Button';
import Students from './Students';

const App = () => {
  const [displayStudents, setDisplayStudents] = useState(true);

  const toggleDisplayStudents = () => setDisplayStudents(!displayStudents);

  return (
    <div className="app">
      <Button onClick={toggleDisplayStudents}>Display / Hide</Button>
      {displayStudents ? <Students /> : null}
    </div>
  );
};

export default App;
