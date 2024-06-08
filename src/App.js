import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/profile" className="nav-link">Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile/:name?" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
