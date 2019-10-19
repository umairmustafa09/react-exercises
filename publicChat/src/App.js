import React from 'react';
import LogIn from './components/Login/login';
import { Route, BrowserRouter } from 'react-router-dom';
import ChatRoom from './components/chatRoom/chatRoom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <center>
        <h1>Public Chat</h1>
          <Route exact path="/" component={ LogIn } />
          <Route path="/chatRoom" component={ ChatRoom } />
      </center>
    </div>
    </BrowserRouter>
  );
}

export default App;
