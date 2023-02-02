import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import { Home, Login } from './pages'
import { Marquee, Navbar } from './components'

const App = () => (
  <Box>
    <Marquee/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </Box>
)

export default App
