import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userLoggedContext from './userLoggedContext';

import Companies from './companies/Companies';
import CompanyRoutes from './companies/CompanyRoutes';
import Jobs from './jobs/Jobs';
import Login from './login/Login';
import Signup from './signup/Signup';
import Profile from './profile/Profile';
import Home from './Home';

const AppRoutes = () => {
    const {isUserLoggedIn} = useContext(userLoggedContext);

    return (
        <>
        {isUserLoggedIn ? (
            <>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/companies"><Companies /></Route>
                    <Route exact path="/jobs"><Jobs /></Route>
                    <Route exact path="/profile"><Profile /></Route>
                    <Redirect from="/login" to="/" />
                    <Redirect from="/signup" to="/" />
                    <CompanyRoutes />
                    <Route>"404"</Route>
                </Switch>
                
            </>
        ) : (
            <>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/signup"><Signup /></Route>
                    <Redirect to="/" />
                </Switch>
            </>
        )}
            
        </>
    )
};

export default AppRoutes;