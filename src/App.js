import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";



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
