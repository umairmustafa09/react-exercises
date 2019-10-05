import React from 'react';
import SignIn from './components/signIn';
import SignUp from './components/SignUp';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const  App = () => {
  return (
        <Router>
          <div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/">SignIn</Link>
                </li>
                <li>
                  <Link to="/SignUp">SignUp</Link>
                </li>
              </ul>
            </div>
            <div>
              <Route exact path="/" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
            </div>
          </div>
        </Router>
  );
}


export default App;
