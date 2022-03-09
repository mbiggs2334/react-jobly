import React, { useContext, useState, useEffect } from 'react';
import userLoggedContext from '../userLoggedContext';
import './Profile.css';

const Profile = () => {

    const {user, handleFormChanges, editUser} = useContext(userLoggedContext);
    
    const [userInfo, setUserInfo] = useState({...user});

    const handleChange = (e) => {
        handleFormChanges(setUserInfo, e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(userInfo);
        document.getElementById('password').value = '';
    };

    return (
        <div className="Profile">
            <h1 className="Profile-header">Your Profile</h1>
            <div className="Profile-username">
                <h3>Username:</h3>
                <span>{user.username}</span>
            </div>
            <form className="Profile-form" onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Your first name...'
                    onChange={handleChange}
                    value={userInfo.firstName}
                    required
                />
                <label htmlFor='lastName'>Last Name: </label>
                <input 
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Your last name...'
                    onChange={handleChange}
                    value={userInfo.lastName}
                    required
                />
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your email...'
                    onChange={handleChange}
                    value={userInfo.email}
                    required
                />
                <label htmlFor='password'>Confirm Password for changes: </label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Your password...'
                    onChange={handleChange}
                    required
                />
                <button>Save Changes</button>
            </form>
        </div>
    )
};

export default Profile;