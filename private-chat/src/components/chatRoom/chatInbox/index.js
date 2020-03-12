import React, { useState } from 'react';

function ChatInbox() {
	const [input, setInput] = useState('');
	const [msgs, setMsgs] = useState([]);
	const [name, setName] = useState('uamir');

	const add = (e) => {
		setInput(e.target.value);
	};

	const sendMessage = () => {
		const today = new Date();
		const toSend = {
			text: input,
			name: name,
			date:
				today.getFullYear() +
				'-' +
				(today.getMonth() + 1) +
				'-' +
				today.getDate(),
			time: today.getHours() + ':' + today.getMinutes()
		};
		setMsgs([...msgs, toSend]);
	};

	const enteredPress = (e) => {
		if (e.keyCode === 13) sendMessage();
	};

	const list = msgs.map((msg, i) => (
		<p key={i}>
			{msg.text}{' '}
			<span>
				{' '}
				by {msg.name} at {msg.time} {msg.date}{' '}
			</span>
		</p>
	));

	return (
		<div className="chatInbox">
			<div className="para">{list}</div>
			<input
				type="text"
				placeholder="Type Message !"
				onChange={add}
				onKeyUp={enteredPress}
			/>
		</div>
	);
}
export default ChatInbox;
