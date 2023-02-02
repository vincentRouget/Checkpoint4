import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/Menu.scss';

const Menu = ({ display, setDisplay }) => {

    const id = 3;
    
    const handleDisplay = () => {
        setDisplay(!display);
    };
    const deleteUser = () => {
        axios
            .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {

            })
    };

    useEffect(() => {

    }, []);

    return (
        <div className='container'>
            <div className='section'>
                <div className='menu'>
                    <NavLink to='/classement'>
                        <button type='submit' onClick={handleDisplay}>Classement</button>
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to='/scores'>
                        <button type='submit' onClick={handleDisplay}>Mes scores</button>
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to='/'>
                        <button type='submit' onClick={handleDisplay}>Se déconnecter</button>
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to='/'>
                        <button type='submit' onClick={deleteUser}>Supprimer mon compte</button>
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to='/jeu'>
                        <button type='submit' onClick={handleDisplay}>Quitter</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;