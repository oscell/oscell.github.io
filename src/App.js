import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
