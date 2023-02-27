import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AppContext } from './context/AppContext';
import { Home, Login, Watch, Giving } from './pages';
import { Footer, LoginModal, Marquee, Navbar } from './components';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <AppContext.Provider value={{ showLoginModal, setShowLoginModal }}>
      <Marquee />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/giving" element={<Giving />} />
        </Routes>
      </BrowserRouter>
      <LoginModal />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
