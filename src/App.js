import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
// Lazy loading to optimize site
const Main = lazy(() => import('./pages/main/Main.jsx'));
const Profile = lazy(() => import('./pages/profile/Profile.jsx'));
const Menu = lazy(() => import('./pages/menu/Menu.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Suspense>
        
    </Router>
  );
}

export default App;
