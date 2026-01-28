import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/suporte" element={<SupportPage />} />
          {/* Add more routes here */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
