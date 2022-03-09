import React, { useContext } from 'react';
import userLoggedContext from '../userLoggedContext';

const ApplyForJob = ({text, disabled, id}) => {
    const {applyToJob, user} = useContext(userLoggedContext);
    const handleClick = () => {
        applyToJob(user.username, id);
    };

    return (
        <button onClick={handleClick} disabled={disabled}>{text}</button>
    )
};

export default ApplyForJob;