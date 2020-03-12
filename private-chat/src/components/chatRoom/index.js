import React from 'react';
import ChatInbox from './chatInbox';
import SideBar from './sideBar';
import './style.css';

const ChatRoom = () => {
	return (
		<div className="container">
			<SideBar />
			<ChatInbox />
		</div>
	);
};
export default ChatRoom;
