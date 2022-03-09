import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import CompanyDetails from './CompanyDetails';

const Company = () => {

    const { handle } = useParams();
   
    const [company, setCompany] = useState({});

    useEffect(() => {
        async function getCompany(){
            let res = await JoblyApi.getCompany(handle);
            setCompany(() => res);
        };
        getCompany();
    }, [] );

    return (
        <div>
            <CompanyDetails company={company} />
        </div>
    )
};

export default Company;