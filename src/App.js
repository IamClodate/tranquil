import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
