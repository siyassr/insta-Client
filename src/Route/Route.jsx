import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import Forget from '../page/Forget';
import Home from '../components/Home';

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

        </Routes>
    </Router>
  )
}

export default LayoutRoute