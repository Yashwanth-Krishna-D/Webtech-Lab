import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Thermostat from './pages/Thermostat';
import Timer from './pages/Timer';

export default function App(){
  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">Yashwanth</div>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/achievements">Achievements</NavLink></li>
          <li><NavLink to="/thermostat">Thermostat</NavLink></li>
          <li><NavLink to="/timer">Timer</NavLink></li>
        </ul>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/thermostat" element={<Thermostat />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </main>
    </div>
  );
}
