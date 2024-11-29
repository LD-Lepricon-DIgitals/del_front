import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
// Лениво загружаемые компоненты
const Main = lazy(() => import('./pages/main/Main.jsx'));
const Profile = lazy(() => import('./pages/profile/Profile.jsx'));
const Menu = lazy(() => import('./pages/menu/Menu.jsx'));

function App() {
  return (
    <AppProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Suspense>
      </Router>
    </AppProvider>
  );
}

export default App;
