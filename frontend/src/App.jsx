import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Jeu from './pages/Jeu';
import Live from './pages/Live';
import Menu from './pages/Menu';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jeu" element={<Jeu />} />
        <Route path="/live" element={<Live />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;