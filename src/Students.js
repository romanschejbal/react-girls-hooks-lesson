import React from 'react';
import { dataArray } from './data';
import ListItem from './components/ListItem';

const Students = () => {
    return (
        <ul>
            {dataArray.map(student => {
                const isThisFemale = student.gender === "F";
                const initials = `${student.firstName.charAt(0)}${student.lastName.charAt(0)}`;

                return (
                    <ListItem isThisFemale={isThisFemale} firstName={student.firstName} lastName={student.lastName} house={student.house} initials={initials} />
                )
            })}
        </ul>
    )
}



export default Students;