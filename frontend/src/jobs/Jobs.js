import React, { useState, useEffect } from 'react';
import './Jobs.css';

import JoblyApi from '../api';
import JobsDiv from './JobsDiv';
import { v4 as uuid } from 'uuid';

const Jobs = () => {

    
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs(){
            let res = await JoblyApi.getJobs();
            setJobs([...res.jobs]);
        };
        getJobs();
    }, [] );

    return (
        <div className="Jobs">
            <h1 className="Jobs-header">Jobs</h1>
            {jobs.map(job => <JobsDiv key={uuid()} job={job} />)}
        </div>
    )
};

export default Jobs;