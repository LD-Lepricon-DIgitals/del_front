import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import Cart from './pages/cart/Cart.jsx'
import Profile from './pages/profile/Profile.jsx';
import Menu from './pages/menu/Menu.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile user_role="courier"/>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
