import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <div className="bg-grid"></div>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
