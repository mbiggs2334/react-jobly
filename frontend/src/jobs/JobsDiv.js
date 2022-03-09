import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './JobsDiv.css';
import userLoggedContext from '../userLoggedContext';

import ApplyForJob from './ApplyForJob';

const JobsDiv = ({job, onCompanyPage}) => {

    const {user: {applications}, user} = useContext(userLoggedContext);

    const [apps, setApps] = useState([]);

    return (
        <div className="Job">
            <h2 className="Job-title">{job.title}</h2>
            {!onCompanyPage ? <h3 className="Job-company-link">@<Link to={`/companies/${job.companyHandle}`}>{job.companyName}</Link></h3> : null}
            <p className='Job-details'>
                <span>Salary: {job.salary ? job.salary : "N/A"}</span><br />
                {job.equity ? 'Equity: ' + job.equity : <span>Equity: N/A</span>}<br />
            </p>
            <ApplyForJob 
                id={job.id}
                text={user.applications.includes(job.id) ? 'APPLIED' : 'APPLY'}
                disabled={user.applications.includes(job.id) ? true : false}
            />
        </div>
    )
};

export default JobsDiv;