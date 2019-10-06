import React, { useState } from 'react';
import './todo.css';

function TodoApp(){
    let[ valArray, setValArray ] = useState( [] );
    const add = () => {
        let val = document.getElementById( "input" ).value;
        setValArray( valArray.push( val ) );
        console.log( valArray );
    }
    
    return(
        <div className="container">
            <input type="text" placeholder="Something to do" id="input" />
            <button onClick={ add }>Add</button>
            <div id ="add"></div>
        </div>
    );
}
export default TodoApp;