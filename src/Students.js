import React from 'react';
import { dataArray } from './data';
import Student from './components/Student';

const Students = () => {
    return (
        <ul>
            {dataArray.map(student => {
                const isThisFemale = student.gender === "F";
                const initials = `${student.firstName.charAt(0)}${student.lastName.charAt(0)}`;

                return (
                    <Student isThisFemale={isThisFemale} firstName={student.firstName} lastName={student.lastName} house={student.house} initials={initials} />
                )
            })}
        </ul>
    )
}



export default Students;