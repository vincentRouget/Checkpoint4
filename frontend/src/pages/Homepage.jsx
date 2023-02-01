import React from 'react';
import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1>Homepage</h1>
            <NavLink to='accueil'>
                <button type='submit'>Accueil</button>
            </NavLink>
        </div>
    );
};

export default Homepage;