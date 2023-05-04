import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import UserDropdown from './components/UserDropdown';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="header-container">
            <Menu />
            <Navbar />
            <UserDropdown />
          </div>
        </header>
        <main className="main">
              <UserProfile/>          
        </main>
      </div>
    </Router>
  );
};

export default App;
