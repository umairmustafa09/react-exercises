import React from 'react'
import './chatRoom.css';

const ChatRoom = () => {
    return (
        <div>
            <p>Hi </p>
            <div className = "chat">
                <div id = "newChat"></div>
            </div>
            <div className = "container">
                <input type = "text" placeholder = "Type a messeage !" id = "input" />
                <button>Send</button> 
            </div>
        </div>
    );
}
export default ChatRoom;