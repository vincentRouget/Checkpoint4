import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Jeu from './pages/Jeu';
import Live from './pages/Live';
import Menu from './pages/Menu';
import Classement from './pages/Classement';
import Scores from './pages/Scores';
import UserContext from "../src/components/context/UserContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/user-token`, { headers: { Authorization: token } })
          .then((res) => {
            setUser(res.data)
          })
          .catch((err) => {
            console.error(err)
            navigate("/")
          });
      } else {
        navigate("/")
      }
    }
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Homepage display={display} setDisplay={setDisplay} />} />
          <Route path="/jeu" element={<Jeu display={display} setDisplay={setDisplay} />} />
          <Route path="/live" element={<Live display={display} setDisplay={setDisplay} />} />
          <Route path="/menu" element={<Menu display={display} setDisplay={setDisplay} />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/scores" element={<Scores display={display} setDisplay={setDisplay} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;