import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Menu />
          <Navbar />
          {/* Add your dropdown component here */}
        </header>
        <main>
        <UserProfile />        </main>
      </div>
    </Router>
  );
};

export default App;
