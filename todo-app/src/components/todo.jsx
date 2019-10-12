import React, { useState } from 'react';
import './todo.css';

function TodoApp(){
    let[ valArray, setValArray ] = useState( [] );
    let[ count, setCount ] = useState( 0 );
    const add = () => {
        const val = document.getElementById( "input" ).value;
        valArray.push( val );
        setValArray( valArray );
        setCount( count + 1 );
    }
    
    let list = valArray.map( ( valArray, index ) => <p key={ index }>{ valArray } </p> );
    return(
        <div className="container">
            <div className="para" id ="addTodo">{ list }</div>
            <input type="text" placeholder="Something to do" id="input" />
            <button onClick={ add }>Add</button> 
        </div>
    );
}
export default TodoApp;