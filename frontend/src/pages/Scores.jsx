import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import UserContext from "../components/context/UserContext";
import '../styles/Scores.scss';

const Scores = ({ display, setDisplay }) => {

    const { user, setUser } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);

    const getScores = () => {
        if (user) {
            setId(user.iduser);
            axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/scores/${id}`, { headers: { Authorization: localStorage.getItem("token") } })
                .then((res) => {
                    setData(res.data);
                })
        };
    };

    useEffect(() => {
        if (data == []) {
            setDisplay(!display);
        }
        getScores();
    }, [user, id, display, data]);

    return (
        <div className='Scores'>
            <h1>Mes Scores</h1>
            <h2>{user && user.pseudo}</h2>
            <div className='Scores_tableau'>
                <table class="demo">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Score</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    {data.map((e) => {
                        return (
                            <tbody className='Scores_tableau_ligne'>
                                <tr>
                                    <td>{e.date}</td>
                                    <td>{e.number_score}</td>
                                    <td>{e.average}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            <NavLink to='/jeu'>
                <button className='close'>Fermer</button>
            </NavLink>
        </div>
    );
};

export default Scores;