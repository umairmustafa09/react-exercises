import React, { Component } from 'react';
import '../signInUp.css';

class SignIn extends Component {
    render() { 
        return ( 
            <div className = "signInUp">
                <h1>Log in</h1>
                <form>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"></input>
                    <p><a href="javascript: void(0)" onClick={this.showOrHide}>Create Account</a></p>
                    <button>Log in</button>
                </form>
            </div>
        );   
    }
    showOrHide = () => {
        if( document.getElementById( "signIn" ).style.display  === "block" ){
                document.getElementById( "signIn" ).style.display = "none";
                document.getElementById( "signUp" ).style.display = "block";
        }
        else{
                document.getElementById( "signIn" ).style.display = "block";
                document.getElementById( "signUp" ).style.display = "none";
        }

    }
}
 
export default SignIn;