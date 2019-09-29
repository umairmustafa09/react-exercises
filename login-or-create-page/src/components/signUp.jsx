import React, { Component } from 'react';
import '../signInUp.css';

class SignUp extends Component {
    render() {
        return ( 
            <div className="signInUp">
                <h1>Create Account</h1>
                <form>
                    <input type="text" name="firstName" placeholder="First Nmae"/>
                    <input type="text" name="lastName" placeholder="last Nmae"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <p><a href="javascript: void(0)" onClick={this.showOrHide} >Log in</a></p>
                    <button>Sign up</button>
                </form>
            </div>
        );
    }

    showOrHide = () => {
        if( document.getElementById( "signUp" ).style.display  === "block" ){
                document.getElementById( "signUp" ).style.display = "none";
                document.getElementById( "signIn" ).style.display = "block";
        }
        else{
                document.getElementById( "signUp" ).style.display = "block";
                document.getElementById( "signIn" ).style.display = "none";
        }

    }
}

 
export default SignUp;