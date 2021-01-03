import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Preferences from './Components/Preferences/Preferences';
import Navbar from "./Components/Navbar/Navbar";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

      
    </>
  );
}

export default App;
