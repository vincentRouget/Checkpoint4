import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import '../styles/Classement.scss';

const Classement = ({ display, setDisplay }) => {

    const [data, setData] = useState([]);
    const [rank, setRank] = useState(0);

    const getScores = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/scores/`, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    };

    useEffect(() => {
        getScores();
    }, []);

    return (
        <div className='Scores'>
            <h1>Classement</h1>
            <div className='Scores_tableau'>
                <table class="demo">
                    <thead>
                        <tr>
                            <th>Rang</th>
                            <th>Pseudo</th>
                            <th>Date</th>
                            <th>Score</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    {data.map((e, index) => {
                        return (
                            <tbody className='Scores_tableau_ligne'>
                                <tr>
                                    <td>{index +1}</td>
                                    <td>{e.pseudo}</td>
                                    <td>{e.date}</td>
                                    <td>{e.number_score}</td>
                                    <td>{e.average}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            <div className='fermer'>
                <NavLink to='/jeu'>
                    <button className='close'>Fermer</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Classement;