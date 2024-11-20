import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className="form">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
