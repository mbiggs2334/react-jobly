import React, { useState, useContext } from 'react';
import userLoggedContext from '../userLoggedContext';
import './Login.css';

const Login = () => {
    const INITIAL_STATE = {
        username: '',
        password: ''
    };

    const {authUser, handleFormChanges} = useContext(userLoggedContext);

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        handleFormChanges(setFormData, e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authUser(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <div className="Login">
            <h1 className="Login-header">Login</h1>
            <form className="Login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id='username'
                    type="text"
                    name="username"
                    placeholder='Enter your username...'
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password: </label>
                <input
                    id='password'
                    type="password"
                    name="password"
                    placeholder='Enter your password...'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button>Login</button>
            </form>
        </div>
        
    )
};

export default Login;