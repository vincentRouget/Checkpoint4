import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Timer from '../components/Timer';
import '../styles/Live.scss';
import UserContext from "../components/context/UserContext";
import OiMenu from '@meronex/icons/oi/OiMenu';
import Lucas from '../../../backend/uploads/images/Lucas.jpg';
import Cible from '../../../backend/uploads/images/Cible.jpg';

const Live = ({ display, setDisplay }) => {

    const challenge = 20;
    const { user, setUser } = useContext(UserContext);
    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
    const [timer, setTimer] = useState(challenge);
    const [max_time, setMax_time] = useState(challenge);
    const [number_score, setNumber_score] = useState(0);
    const [average, setAverage] = useState(0);
    const [isStart, setIsStart] = useState(true);
    const [id, setId] = useState(0);
    const [change, setChange] = useState(false);
    const [position_x, setPosition_x] = useState(Math.random() * (1800 - 10) + 10);
    const [position_y, setPosition_y] = useState(Math.random() * (800 - 10) + 10);

    // const getMove = () => {
    //     setPosition_x(position_x + ((Math.floor(Math.random() * (200 - 50)) + 50)));
    //     if (position_x < 20 || position_x > 1800) {
    //         setPosition_x(Math.round(Math.random() * (1800 - 10) + 10));
    //     };
    //     setPosition_y(position_y + ((Math.floor(Math.random() * (200 - 50)) + 50)));
    //     if (position_y < 20 || position_y > 800) {
    //         setPosition_x(Math.round(Math.random() * (800 - 10) + 10));
    //     };
    // };
    // const fonctionVariable = () => {
    //     const variable = (Math.random() - Math.random());
    //     if (variable < 0) {
    //         return Math.floor(variable);
    //     } else if (variable > 0) {
    //         return Math.ceil(variable);
    //     } else {
    //         return 1;
    //     }
    // };
    const getUsers = () => {
        if (user) {
            setId(user.iduser);
            if (id != 0) {
                axios
                    .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, { headers: { Authorization: localStorage.getItem("token") } }
                    )
                    .then((res) => {
                        setDisplay(!display);
                    })
            }
        }
    };
    const handleAverage = () => {
        setAverage(Math.round((number_score / (max_time - timer)) * 100) / 100);
    };
    const handleDisplay = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        // getMove();
    }, []);
    useEffect(() => {
        if (user && timer >= 0) {
            getUsers();
            handleAverage();
        }
    }, [average, display, position_x, position_y]);

    return (
        <div className='Menu'>
            {(timer >= 0) ?
                <div>
                    <div className='Menu_entete'>
                        <div className='Menu_entete_info'>
                            <p onClick={() => setChange(!change)}>Pseudo : {user.pseudo}</p>
                            <p>Score : {number_score}</p>
                            <p>Moyenne : {average}</p>
                        </div>
                        <div className='Menu_entete_time'>
                            <h2>Temps :&nbsp;</h2>
                            <h2> <Timer timer={timer} setTimer={setTimer} /> </h2>
                            <h2>&nbsp;s</h2>
                        </div>
                        <div className='Menu_entete_menu'>
                            <NavLink to='/menu'>
                                <button type='submit' onClick={handleDisplay}><OiMenu /></button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='Menu_target'>
                        <button type='submit' onClick={() => {
                            setNumber_score(number_score + 1);
                            setPosition_x(Math.floor(Math.random() * (1800 - 10) + 10));
                            setPosition_y(Math.floor(Math.random() * (800 - 10) + 10));
                        }}
                            style={{ top: position_y, left: position_x }}
                        >{change ?
                            <img src={Lucas} className='cible'></img>
                            :
                            <img src={Cible} className='cible'></img>
                            }
                        </button>
                    </div>
                </div>
                :
                <div className='Menu_hide'>
                    <NavLink to='/jeu'>
                        <button className={isStart && 'save'} onClick={() => {
                            setIsStart((prevState) => !prevState)
                            axios
                                .post(`${import.meta.env.VITE_BACKEND_URL}/scores/${id}`, { number_score, date, average }
                                    , { headers: { Authorization: localStorage.getItem("token") } }
                                )
                                .then(() => {
                                })
                                .catch((err) => {
                                    console.error(err);
                                })
                            setDisplay(!display);
                        }}>
                            {isStart && `Sauvegarder`}
                        </button>
                        <div className='relative'>
                            <p>{user.pseudo}</p>
                            <p>Score : {number_score}</p>
                            <p>Moyenne : {average}</p>
                        </div>
                    </NavLink>
                </div>
            }
        </div >
    );
};

export default Live;