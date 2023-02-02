import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Timer from '../components/Timer';
import '../styles/Live.scss';
import UserContext from "../components/context/UserContext";
import OiMenu from '@meronex/icons/oi/OiMenu';

const Live = ({ display, setDisplay }) => {

    const { user, setUser } = useContext(UserContext);
    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
    const [timer, setTimer] = useState(10);
    const [temps, setTemps] = useState(60);
    const [number_score, setNumber_score] = useState(0);
    const [average, setAverage] = useState(0);
    const [isStart, setIsStart] = useState(true);
    const [id, setId] = useState(0);
    const [position_x, setPosition_x] = useState(Math.random() * (1820 - 10) + 10);
    const [position_y, setPosition_y] = useState(Math.random() * (820 - 10) + 10);

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
        setAverage(Math.round((number_score / (12)) * 100) / 100);
    };
    const getMove = () => {
        // setPosition_x(position_x + ((Math.floor(Math.random() * (2 - 1)) + 1) * fonctionVariable()));
        // setPosition_y(position_y + ((Math.floor(Math.random() * (2 - 1)) + 1) * fonctionVariable()));
        setPosition_x((Math.random() * (1820 - 10) + 10));
        setPosition_y((Math.random() * (820 - 10) + 10));
    };
    const handleDisplay = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        // getMove();
    }, []);
    useEffect(() => {
        if (user) {
            getUsers();
            handleAverage();
        }
    }, [average, display]);

    return (
        <div className='Menu'>
            {(timer >= 0) ?
                <div>
                    <div className='Menu_entete'>
                        <div className='Menu_entete_info'>
                            <p>Pseudo : {user.pseudo}</p>
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
                            // setPosition_x(position_x + ((Math.floor(Math.random() * (10 - 1)) + 1)) * (Math.floor(Math.random() * (1 + 1)) - 1));
                            // setPosition_y(position_y + (Math.floor(Math.random() * (10 - 1)) + 1));
                            // console.log(((Math.floor(Math.random() * (5 - 1)) + 1) * fonctionVariable()));
                        }}
                            style={{ top: position_y, left: position_x, animationDelay: '100' }}
                        ></button>
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