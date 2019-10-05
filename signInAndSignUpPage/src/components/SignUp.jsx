import React from 'react';
import './signInUp.css';

const SignUp = () => {
  return (
    <div className="signInUp">
        <h1>Create Account</h1>
        <form>
            <input type="text" name="firstName" placeholder="First Nmae"/>
            <input type="text" name="lastName" placeholder="last Nmae"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Sign up</button>
        </form>
    </div>
  );
}
export default SignUp;
