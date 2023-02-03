import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Home, Login } from './pages'
import { Marquee, Navbar } from './components'

const App = () => (
  <div>
    <Marquee/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
