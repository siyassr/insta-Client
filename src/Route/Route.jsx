import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import Forget from '../page/Forget';
import Home from '../components/Home';
import Chat from '../components/Chat';
import Profile from '../components/Profile';
import EditPage from '../components/EditPage';

function LayoutRoute() {
  return (
    <Router>
        <Routes>

            <Route
             path='/login'
             element = {<Login/>}
            />

            <Route
             path='/register'
             element = {<Register/>}
            />
            <Route
             path='/forget'
             element = {<Forget/>}
            />
               <Route
             path='/'
             element = {<Home/>}
            />
            <Route
            path='/chat'
            element={<Chat/>}
            />

           <Route
            path='/profile'
            element={<Profile/>}
            />
            <Route
            path='/edit'
            element={<EditPage/>}
            />

        </Routes>
    </Router>
  )
}

export default LayoutRoute