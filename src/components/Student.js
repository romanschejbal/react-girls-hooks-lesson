import React, {useState} from 'react';

const Student = ({ isThisFemale, firstName, lastName, house, initials }) => {
    const [jabbed, setJabbed] = useState(false);

    const genderClassName = isThisFemale ? "item girls" : "item";
    const jabbedClassName = jabbed ? 'jabbed' : '';

    function onClickJabbed(event) {
        setJabbed(true);
    }

    return (
        <li className={genderClassName + ' ' + jabbedClassName}>
            <div className='name'>
                {!jabbed && <button onClick={onClickJabbed}>jab</button>}
                <div className='initials'>{initials}</div>
                <div>{firstName} {lastName}</div>
            </div>
            <div>{house}</div>
        </li>
    )
}

export default Student;