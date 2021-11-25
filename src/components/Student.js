import React, {useState} from 'react';

const Student = ({ isThisFemale, firstName, lastName, house, initials }) => {
    const [jabbed, setJabbed] = useState(false);

    const genderClassName = isThisFemale ? "item girls" : "item";
    const jabbedClassName = jabbed ? 'jabbed' : '';

    function onChangeJabbed(event) {
        const jeOckovany = event.target.checked;
        setJabbed(jeOckovany);
    }

    return (
        <li className={genderClassName + ' ' + jabbedClassName}>
            <div className='name'>
                <input type="checkbox" checked={jabbed} onChange={onChangeJabbed} />
                <div className='initials'>{initials}</div>
                <div>{firstName} {lastName}</div>
            </div>
            <div>{house}</div>
        </li>
    )
}

export default Student;