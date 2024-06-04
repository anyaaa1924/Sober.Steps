import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home';
import AboutPage from './components/about';
import ResourcesPage from './components/resorces';
import CommunityPage from './components/community';
import FacilitiesPage from './components/facilities';
import LoginPage from './components/login';
import Signup from './components/signup'; // Add this line
import Preloader from './components/preloader';
import RewardsPage from './components/rewards';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<HomeWithPreloader />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} /> {/* Add this line */}
          <Route path="/rewards" element={<RewardsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const HomeWithPreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.add('loaded');
    }, 1500); // Set timeout for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={`home-content ${loading ? 'hidden' : ''}`}>
        <HomePage />
      </div>
    </>
  );
};

export default App;
