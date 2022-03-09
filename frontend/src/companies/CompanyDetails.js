import React from 'react';
import JobsDiv from '../jobs/JobsDiv';
import { v4 as uuid } from 'uuid';
import './CompanyDetails.css';

const CompanyDetails = ({ company }) => {
    
    return (
        <div className="CompanyDetails">
            <div className="CompanyDetails-company">
                <h1 className="CompanyDetails-header">{company.name}</h1>
                <p className="CompanyDetails-desc">{company.description}</p>
            </div>
            <div className="CompanyDetails-jobs">
                <h2 className="CompanyDetails-jobs-header">Jobs</h2>
                {(company.jobs || []).map(job => <JobsDiv key={uuid()} job={job} onCompanyPage={true} />)}
            </div>
        </div>
    )
};

export default CompanyDetails;