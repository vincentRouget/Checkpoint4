import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Accueil from './pages/Accueil';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accueil" element={<Accueil />} />

      </Routes>
    </div>
  );
};

export default App;