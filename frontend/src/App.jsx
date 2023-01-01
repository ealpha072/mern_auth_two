import React from 'react'
import Landing from './components/Landing'
import Register from './components/Register'
import Profile from './components/Profile'
import {Routes, Route } from 'react-router-dom'

const App = () => {
    return (
       <Routes>
           <Route path='/' element={<Landing />} />
           <Route path='/register' element={<Register />} />
           <Route path='/profile' element={<Profile />} />
       </Routes>
    )
}

export default App
