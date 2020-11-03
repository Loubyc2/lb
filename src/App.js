import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import StateProvider from './StateProvider';
import reducer, { initialState } from './reducer';

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <div className="app">
          <Header />
          <Home />
        </div>
      </Router>
    </StateProvider>


  );
}

export default App;
