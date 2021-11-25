import React, {useState} from 'react';
import './App.css';
//import Button from './components/Button';
import Students from './Students';

const App = () => {
  const [displayStudents, setDisplayStudents] = useState(false)

  const toggleDisplayStudents = () => setDisplayStudents(!displayStudents);

  return (
    <div className="App">
      <button onClick={toggleDisplayStudents}>Display / Hide</button>
      {displayStudents ? <Students /> : null}
    </div>
  );
}

export default App;

// map, sort, filter, some, find

// const filteredGirls = dataArray.filter(girls => girls.gender === "F");
// const mappedGirls = filteredGirls.map(girl => <div>{girl.firstName}</div>);
// const isThemeFemale = dataArray.some(girls => girls.gender === "F");
// const findFirstFemale = dataArray.find(female => female.gender === "F")


{/* <Button data={data} title="Hej" subTitle="1.1.2020" />
      <Button title="Hou" />
      <Button title="lets" />
      <Button title="Go" /> */}

// 1. export default App => import App from
// 2. export App => import { App } from
