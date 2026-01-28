import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="ByteData Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
                    <span className="logo-text">ByteDataEngine</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span className="hamburger">☰</span>
                </button>

                {/* Desktop Menu */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/arquitetura" className="nav-link" onClick={() => setIsOpen(false)}>Implementação</Link>
                    <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Recursos</a>
                    <div className="nav-actions" style={{ display: 'flex', alignItems: 'center' }}>

                        <button onClick={toggleTheme} className="btn-theme-toggle" aria-label="Alternar tema">
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
