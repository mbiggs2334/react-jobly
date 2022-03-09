import React from 'react';
import { Link } from 'react-router-dom';
import './CompaniesDiv.css';

const Company = ({company}) => {
    const {description, handle, logoUrl, name, numEmployees} = company;
    return (
        <Link to={`/companies/${handle}`}>
            <div className="Company">
                <h2 className="Company-header">{name}</h2>
                <p className="Company-description">{description}</p>
            </div>    
        </Link>
    )
};

export default Company;