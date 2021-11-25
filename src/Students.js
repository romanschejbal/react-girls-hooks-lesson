import React, {useEffect, useState} from 'react';
import Student from './components/Student';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('http://18.157.175.137/students')
            .then(response => response.json())
            .then(json => {
                setStudents(json);
                setLoading(false)
            });
    }, []);

    if (isLoading) {
        return (
            <div>Načítám...</div>
        )
    }

    return (
        <ul>
            {students.map(student => {
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