import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to='/'>
                        <button type='submit'>Classement</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>
                        <button type='submit'>Mes scores</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/jeu'>
                        <button type='submit'>Quitter</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>
                        <button type='submit'>Supprimer mon compte</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>
                        <button type='submit'>Se déconnecter</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;