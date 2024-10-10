// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Gemini from './page/Gemini';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gemini" element={<Gemini />} />
      </Routes>
    </Router>
  );
}

export default App;
