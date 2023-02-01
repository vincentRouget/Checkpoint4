import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Live.scss';

const Live = () => {

    const [score, setScore] = useState(0);
    const [temps, setTemps] = useState(60);
    const [moyenne, setMoyenne] = useState(0);

    const handleMoyenne = () => {
        setMoyenne(Math.round((score / (61 - temps)) * 100) / 100);
    };

    useEffect(() => {
        handleMoyenne();
    }, [score])

    return (
        <div className='Menu'>
            <div className='Menu_entete'>
                <div className='Menu_entete_info'>
                    <p>Pseudo :</p>
                    <p>Score : {score}</p>
                    <p>Moyenne : {moyenne}</p>
                </div>
                <div className='Menu_entete_time'>
                    <h2>Temps : {temps} s</h2>
                </div>
                <div className='Menu_entete_menu'>
                    <NavLink to='/menu'>
                        <button type='submit'>MENU</button>
                    </NavLink>
                </div>
            </div>
            <div className='Menu_target'>
                <button type='submit' onClick={() => setScore(score + 1)}>O</button>
            </div>
        </div>
    );
};

export default Live;