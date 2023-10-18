/** @format */

// import logo from './logo.svg';
import React from 'react';

import './App.css';
//import 'antd/dist/antd.css';
import LoginPage from './pages/login-page/login-page.component';
import ChatPage from './pages/chat-page/chat-page.component';

import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';
import RegisterPage from './pages/register-page/register-page.component';
import RoomPage from './pages/room/room.pages';
import DragDropPage from './pages/dragdrop/dragdrop.pages';

class App extends React.Component {
    render() {
        const { currentUser } = this.props;
       // console.log(currentUser)
        return (
            <Routes>
             {/*  <Route path="/" element={<Join />} />
            <Route path="/chat/:name/:room" element={<Chat />} />*/} 
                <Route
                    path='/'
                    element={ (currentUser ? <Navigate to='/chat'></Navigate> : <LoginPage />)}
                ></Route>
                <Route
            
                    path='/annotation-rooms'
                    element={ (currentUser ? <RoomPage /> : <Navigate to='/'></Navigate>)}
                ></Route>
                <Route
              
                    path='/dragdrop'
                    element={(currentUser ? <DragDropPage /> : <Navigate to='/'></Navigate>)}
                ></Route>
                <Route
                  
                    path='/register'
                    element={(currentUser ? <Navigate to='/chat'></Navigate> : <RegisterPage />)}
                ></Route>
                <Route  path='/chat' element={() => (currentUser ? <ChatPage /> : <Navigate replace to='/'></Navigate>)}></Route>
            </Routes>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
