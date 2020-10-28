import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
      </div>
    </Router>

  );
}

export default App;
