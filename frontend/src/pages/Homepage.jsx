import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from "../components/context/UserContext";
import '../styles/Homepage.scss';

const Homepage = ({ display, setDisplay }) => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    const handlePseudo = (e) => {
        setPseudo(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSign = () => {
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { pseudo, password, })
            .then((res) => {
                setDisplay(!display);
            })
    };
    const handleConnect = (e) => {
        e.preventDefault();
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/users/signin`, {
                pseudo,
                password,
            })
            .then((res) => {
                const userInfo = res.data;
                setUser({
                    iduser: userInfo.user.iduser,
                    pseudo: userInfo.user.pseudo,
                });
                const { token } = res.data;
                localStorage.setItem("token", "Bearer " + token);
                navigate("/jeu", {
                    state: {
                        token,
                    },
                });
            })
    };

    useEffect(() => {
    }, [display]);

    return (
        <div className='Homepage'>
            <div className='input'>
                <div className='label'>
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type={pseudo} name="pseudo" id="pseudo" value={pseudo} onChange={handlePseudo} required />
                </div>
                <div className='label'>
                    <label htmlFor="password">Mot de passe</label>
                    <input type='password' name="password" id="password" value={password} onChange={handlePassword} required />
                </div>
                <div className='section'>
                    <button type='submit'
                        onClick={(e) => { handleConnect(e); }}
                    >Se connecter</button>
                    <NavLink to='/'>
                        <button type='submit'
                            onClick={handleSign}
                        >S'inscrire</button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Homepage;