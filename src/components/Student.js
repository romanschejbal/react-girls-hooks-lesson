import React, { useState, useEffect } from 'react';

const Student = ({
  isThisFemale,
  firstName,
  lastName,
  house,
  initials,
  onClick,
}) => {
  const [jabbed, setJabbed] = useState(false);

  const genderClassName = isThisFemale ? 'list-student girls' : 'list-student';
  const jabbedClassName = jabbed ? 'jabbed' : '';

  function onClickJabbed(event) {
    setJabbed(jabbed + 1);
  }

  return (
    <li>
      <a
        onClick={onClick}
        href="#student"
        className={genderClassName + ' ' + jabbedClassName}
      >
        <div className="list-student-inner">
          {jabbed < 2 && <button onClick={onClickJabbed}>jab</button>}
          <div className="list-initials">{initials}</div>
          <div>
            {firstName} {lastName}
          </div>
        </div>
        <div>{house}</div>
      </a>
    </li>
  );
};

export default Student;
