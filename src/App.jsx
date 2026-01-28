import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ArchitecturePage from './pages/ArchitecturePage';
import ScrollToTop from './components/common/ScrollToTop'; // Helper I'll create inline if needed or just let native scroll handle

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arquitetura" element={<ArchitecturePage />} />
          {/* Add more routes here */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
