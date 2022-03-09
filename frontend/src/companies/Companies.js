import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';
import {v4 as uuid} from 'uuid';
import './Companies.css';

import CompaniesDiv from './CompaniesDiv';

const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(()=>{
        async function getCompanies(){
            let data = await JoblyApi.request('companies');
            setCompanies([...data.companies]);
        };
        getCompanies();
    }, []);

    return (
        <div className="Companies-list">
            <h1 className="Companies-header">Companies</h1>
            {companies.map(comp => <CompaniesDiv key={uuid()} company={comp} />)}
        </div>
    )
};

export default Companies;