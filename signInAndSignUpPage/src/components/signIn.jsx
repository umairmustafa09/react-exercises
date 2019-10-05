import React from 'react';
import './signInUp.css';

const SignIn = () => {
  return (
        <div className = "signInUp">
            <h1>Log in</h1>
            <form>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"></input>
                <button>Log in</button>
            </form>
        </div>
  );
}
export default SignIn;
