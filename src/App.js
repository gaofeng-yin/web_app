import React, {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Preferences from './Components/Preferences/Preferences';
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

      <Navbar />
    </>
  );
}

export default App;
