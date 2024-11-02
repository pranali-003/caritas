import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './donor/pages/register/Register'
import Login from './donor/pages/login/Login'
import Profile from './donor/pages/profile/Profile'
const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/donor_register" element={<Register/>}></Route>
            <Route path="/donor_login" element={<Login/>}></Route>
            <Route path="/donor_profile" element={<Profile/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
