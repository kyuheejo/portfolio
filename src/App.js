import logo from './logo.svg';
import './App.scss';
import Project from './Project.js';
import React, { Component } from 'react';
import Bubble from './Bubble.js';
import ReactDOM from "react-dom"
import Home from './Home.js';
import Test from './Test.js';

import {
  BrowserRouter,
  Switch,
  Route,
  userParams
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/spheroid">
        <Test />
      </Route>

        </BrowserRouter>
    </div>
    


  );
}

export default App;
