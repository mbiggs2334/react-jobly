import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import userLoggedContext from './userLoggedContext';
import JoblyApi from './api';
import handleFormChanges from './handleFormChanges';

import Nav from './nav/Nav';

const App = () => {
    
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('bearer_token') ? true : false);
    const [user, setUser] = useState(
        localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : {} 
        );

    const authUser = async(data) => {
        let res = await JoblyApi.authUser(data);
        if(res.token){
            localStorage.setItem('bearer_token', res.token);
            let {user} = await JoblyApi.getUserInfo(res.user.username);
            localStorage.setItem('user', btoa(JSON.stringify(user)));
            setUser(() => ({...user}), setIsUserLoggedIn(true));
        };
    };

    const logout = () => {
        localStorage.removeItem('bearer_token');
        localStorage.removeItem('user');
        setIsUserLoggedIn(false);
    };

    const editUser = async(data) => {
        authUser(data)
        .then(() => JoblyApi.editUserInfo(data))
        .then(data => {
            localStorage.setItem('user', btoa(JSON.stringify({
                applications: [...user.applications],
                ...data.user
            })));
            setUser(() => ({applications: [...user.applications],...data.user}));
        });
    };

    const applyToJob = async(username, jobId) => {
        JoblyApi.applyToJob(username, jobId)
        .then(data => {
            return JoblyApi.getUserInfo(username);
        })
        .then(({user}) => {
            localStorage.setItem('user', btoa(JSON.stringify(user)));
            setUser(() => ({...user}));
        });
    };

    const createNewUser = async(data) => {
        JoblyApi.signUpUser(data)
        .then(({user, token}) => {
            localStorage.setItem('bearer_token', token);
            return JoblyApi.getUserInfo(user.username);
        })
        .then(({user}) => {
            localStorage.setItem('user', btoa(JSON.stringify(user)));
            setUser(() => ({...user}), setIsUserLoggedIn(true));
        });
    };
    
    return (
        <>
        <userLoggedContext.Provider value={{
            isUserLoggedIn,
            logout,
            authUser,
            user,
            handleFormChanges,
            editUser,
            applyToJob,
            createNewUser
        }}>
            <Nav />
            <main>
                <AppRoutes />
            </main>
        </userLoggedContext.Provider>
        </>
    )
};

export default App;