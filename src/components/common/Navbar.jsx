import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="ByteData Logo" className="logo-img" />
                    <span className="logo-text">ByteDataEngine</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                    <span className="hamburger">☰</span>
                </button>

                {/* Desktop Menu */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/suporte" className="nav-link" onClick={() => setIsOpen(false)}>Suporte</Link>
                    {/* Use standard anchor for hash to ensure it works across pages usually via app scroll logic or Link if we have hash-router support. 
                        Since we added hash support in ScrollToTop, we can use Link to="/#features" or plain A if handled. 
                        Safe bet: Link to (absolute path) */}
                    <Link to="/#features" className="nav-link" onClick={() => setIsOpen(false)}>Recursos</Link>
                    <div className="nav-actions">
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
