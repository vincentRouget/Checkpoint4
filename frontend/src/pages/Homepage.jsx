import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from "../components/UserContext";

const Homepage = () => {
    // const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [isEmailMissing, setIsEmailMissing] = useState(false);
    const [isPasswordMissing, setIsPasswordMissing] = useState(false);
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    const handleConnect = (e) => {
        e.preventDefault();
        setIsEmailMissing(false);
        setIsPasswordMissing(false);
        setIsEmailCorrect(false);
        setIsPasswordCorrect(false);
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/users/signin`, {
                email,
                password,
            })
            .then((res) => {
                const userInfo = res.data;
                setUser({
                    idUser: userInfo.user.idUser,
                    pseudo: userInfo.user.pseudo,
                    email: userInfo.user.email,
                    image_user: userInfo.user.image_user,
                });
                const { token } = res.data;
                localStorage.setItem("token", "Bearer " + token);
                navigate("/plans-de-communication", {
                    state: {
                        token,
                    },
                });
            })
            .catch((err) => {
                console.error(err);
                if (err.response.data == "Email and password are required") {
                    setIsEmailMissing(true);
                    setIsPasswordMissing(true);
                }
                if (err.response.data == "Email is required") setIsEmailMissing(true);
                if (err.response.data == "Password is required") setIsPasswordMissing(true);
                if (err.response.data == "User not found") { setIsEmailCorrect(true); setEmail(""); }
                if (err.response.data == "Wrong password") { setIsPasswordCorrect(true); setPassword(""); }
            });
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick(e);
        };
    };

    return (
        <div className='Homepage'>
            <div            >
                <label htmlFor="email">Email</label>
                <input type={email} name="email" id="email" value={email} onKeyPress={handleKeyPress} required />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input name="password" id="password" value={password} onKeyPress={handleKeyPress} required />
            </div>
            <div>
                <NavLink to='jeu'>
                    <button type='submit' onClick={(e) => { handleConnect(e); }}>Se connecter</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Homepage;