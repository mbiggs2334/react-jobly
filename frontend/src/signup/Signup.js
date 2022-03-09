import React, { useState, useContext } from 'react';
import userLoggedContext from '../userLoggedContext';
import './Signup.css';

const Signup = () => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };

    const {handleFormChanges, createNewUser} = useContext(userLoggedContext);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        handleFormChanges(setFormData, e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewUser(formData);
        // setFormData(INITIAL_STATE);
    };

    return (
        <div className="Signup">
            <h1 className="Signup-header">SignUp</h1>
            <form className="Signup-form" onSubmit={handleSubmit}>
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
                <label htmlFor="firstName">First Name: </label>
                <input
                    id='firstName'
                    type="text"
                    name="firstName"
                    placeholder='Enter your first name...'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="lastName">Last Name </label>
                <input
                    id='lastName'
                    type="text"
                    name="lastName"
                    placeholder='Enter your last name...'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email: </label>
                <input
                    id='text'
                    type="email"
                    name="email"
                    placeholder='Enter your email...'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <button>Login</button>
            </form>
        </div>
        
    )
};

export default Signup;