import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "./styles.css";

import Navbar from './components/Navbar';
import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
