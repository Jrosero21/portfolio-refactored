import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="personal__logo">
            <Link to="/">Home</Link>
          </div>
          <ul className="nav__link--list">
            <li className="nav__link">
              <Link to="/projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">Projects</Link>
            </li>
            <li className="nav__link">
              <a href="#languages" className="nav__link--anchor link__hover-effect link__hover-effect--black">Languages</a>
            </li>
            <li className="nav__link" id="contact__button">
              <a href="#contact" className="nav__link--anchor nav__link--anchor--primary">Contact</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
