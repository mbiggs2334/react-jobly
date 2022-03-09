import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import userLoggedContext from './userLoggedContext';

const Home = () => {

    const {isUserLoggedIn, user: {username}} = useContext(userLoggedContext);

    return (
        <div className="Home">
            <h1 className="Home-header">Jobly</h1>
            <p className="Home-description">Jobs, all in one convenient place.</p>
            {isUserLoggedIn ? <p className="Home-welcome">{`Welcome back, ${username}!`}</p> : (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )}
            
        </div>
    )
};

export default Home;