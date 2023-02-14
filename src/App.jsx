import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Home, Login, Watch } from './pages'
import { Footer, LoginModal, Marquee, Navbar } from './components'

const App = () => (
  <div>
    <Marquee/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/watch' element={<Watch/>} />
      </Routes>
    </BrowserRouter>
    <LoginModal/>
    <Footer/>
  </div>
)

export default App
