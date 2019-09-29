import React from 'react';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import './App.css';

function App() {
  const divStyle = {
    display: "none"
  };
  return (
        <div>
          <div id = "signIn">
            <SignIn />
          </div>
          <div id = "signUp" style={divStyle}>
            <SignUp />
          </div>
        </div>
  );
}


export default App;
