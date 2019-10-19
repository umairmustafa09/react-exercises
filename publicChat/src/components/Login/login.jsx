import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LogIn = () => {
    const [ userData, setUserData ] = useState( [] );

    const inputData = () => {
        const newUserData = [ ...userData ];
        newUserData.username = document.getElementById( "username" ).value;
        newUserData.password = document.getElementById( "password" ).value;
        setUserData( [ userData, newUserData ] )
        console.log( newUserData );
    }

    return(
        <div className = "logIn">
            <h1>Log in</h1>
            <input type = "text" name = "username" placeholder = "Username" id = "username" />
            <input type = "password" name = "password" placeholder = "Password" id = "password" />
            <Link to = "/ChatRoom" ><button onClick = { inputData } className = "button">Log in</button></Link>
        </div>
    );
}
export default LogIn;