import React from 'react';

const Button = ({ title, subTitle }) => {
    return (
        <button className="testButton">
            <span>{title}</span>
            <br />
            <span>{subTitle}</span>
        </button>
    )
}

export default Button;
