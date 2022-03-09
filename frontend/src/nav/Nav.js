import React, { useContext } from 'react';
import NavLink from './NavLink';
import userLoggedContext from '../userLoggedContext';
import './Nav.css';

import Logout from './Logout';

const Nav = () => {

    const {isUserLoggedIn, user} = useContext(userLoggedContext);

    return (
        <nav>
            {isUserLoggedIn ? (
                <>
                <div className="Nav-home">
                    <NavLink text='Jobly' path="/" />
                </div>
                <div className="Nav-dir">
                    <NavLink text='Companies' path='/companies' />
                    <NavLink text="Jobs" path="/jobs" />
                    <NavLink text={user.username} path="/profile" />
                    <Logout />
                </div>
                </>
            ) : (
                <>
                <div className="Nav-home">
                    <NavLink text='Jobly' path="/" />
                </div>
                <div className="Nav-dir">
                    <NavLink text="Login" path="/login" />
                    <NavLink text="Signup" path="/signup" />
                </div>
                    
                </>
            )}
        </nav>
    )
};

export default Nav;