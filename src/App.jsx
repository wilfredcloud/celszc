import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { Home, Login, Watch, Giving } from './pages';
import { AuthModal, Footer, Marquee, Navbar } from './components';

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
      <AuthModal />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
