import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import '../styles/Jeu.scss';
import UserContext from "../components/context/UserContext";
import OiMenu from '@meronex/icons/oi/OiMenu';

const Jeu = ({ display, setDisplay }) => {

    const { user, setUser } = useContext(UserContext);
    const [bestScore, setBestScore] = useState(0);
    const [prevState, setPrevState] = useState(true);
    const [isStart, setIsStart] = useState(prevState);
    const [id, setId] = useState(0);

    const getScores = () => {
        if (user) {
            setId(user.iduser);
            axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/scores/best/${id}`, { headers: { Authorization: localStorage.getItem("token") } })
                .then((res) => {
                    setBestScore(res.data[0].Best);
                })
        }
    };
    const handleDisplay = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        getScores();
    }, [user, bestScore, id, display]);

    return (
        <div className='Jeu'>
            <button onClick={() =>

                console.log(user)
            }></button>
            <div className='Jeu_entete'>
                <div className='Jeu_entete_info'>
                    <p>Pseudo : {user && user.pseudo}</p>
                    <p>Meilleur score : {user && bestScore}</p>
                </div>
                <div className='Jeu_entete_time'>
                    <h2>Temps : 20 s</h2>
                </div>
                <div className='Jeu_entete_menu'>
                    <NavLink to='/menu'>
                        <button type='submit' onClick={handleDisplay}><OiMenu /></button>
                    </NavLink>
                </div>
            </div>
            <div className='Jeu_launch'>
                <NavLink to='/live'>
                    <button onClick={() => setIsStart((prevState) => !prevState)}>Start</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Jeu;