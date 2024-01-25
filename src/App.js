import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Bio from './components/Bio/Bio';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Projects /><Bio /></>} />
          <Route path="/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;