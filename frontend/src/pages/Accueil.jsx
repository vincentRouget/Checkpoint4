import React from 'react';
import { NavLink } from "react-router-dom";

const Accueil = () => {
    return (
        <div className='Accueil'>
            <h1>Accueil</h1>
            <NavLink to='/'>
                <button type='submit'>Homepage</button>
            </NavLink>
        </div>
    );
};

export default Accueil;