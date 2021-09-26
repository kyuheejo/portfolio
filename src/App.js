import logo from './logo.svg';
import './App.scss';
import Project from './Project.js';
import Homepage from './Homepage.js';
import Bubble from './Bubble.js';
import ReactDOM from "react-dom"
import ResumePage from './resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  userParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/resume">
          <ResumePage/>
        </Route>
      </Switch>
    </Router>

   

  );
}

export default App;
