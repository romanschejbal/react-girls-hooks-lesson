import React from 'react';
import './App.css';
//import Button from './components/Button';
import Students from './Students';

// map, sort, filter, some, find

const App = () => {
  return (
    <div className="App">
      <ul>
        <Students />
      </ul>
    </div>
  );
}

export default App;

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
