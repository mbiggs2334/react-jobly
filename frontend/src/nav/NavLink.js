import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({text, path, type}) => {
    return (
        <div>
            <Link to={path}>{text}</Link>
        </div>
    )
};

export default NavLink;