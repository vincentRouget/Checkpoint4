import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Jeu.scss';

const Jeu = () => {

    const [score, setScore] = useState(0);
    const [temps, setTemps] = useState(60);
    const [moyenne, setMoyenne] = useState(0);


    return (
        <div className='Jeu'>
            <div className='Jeu_entete'>
                <div className='Jeu_entete_info'>
                    <p>Pseudo :</p>
                    <p>Meilleur Score :</p>
                </div>
                <div className='Jeu_entete_time'>
                    <h2>Temps : 60 s</h2>
                </div>
                <div className='Jeu_entete_menu'>
                    <NavLink to='/menu'>
                        <button type='submit'>MENU</button>
                    </NavLink>
                </div>
            </div>
            <div className='Jeu_launch'>
                <NavLink to='/live'>
                    <button type='submit'>LANCER</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Jeu;