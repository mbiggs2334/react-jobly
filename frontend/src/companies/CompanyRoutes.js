import React from 'react';
import { Route } from 'react-router-dom';

import Company from './Company';

const CompanyRoutes = () => {
    return (
        <>
            <Route exact path="/companies/:handle">
                <Company />
            </Route>
        </>
    )
};

export default CompanyRoutes;