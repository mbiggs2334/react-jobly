import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userLoggedContext from '../userLoggedContext';

const Logout = () => {
    const {logout} = useContext(userLoggedContext);

    return (
        <Link onClick={logout} to="/">Logout</Link>
    )
};

export default Logout;