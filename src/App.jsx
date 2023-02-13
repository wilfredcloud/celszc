import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Home, Login, Watch, Giving } from './pages'
import { Footer, Marquee, Navbar } from './components'

const App = () => (
  <div>
    <Marquee/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/watch' element={<Watch/>} />
        <Route path='/giving' element={<Giving/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
)

export default App
