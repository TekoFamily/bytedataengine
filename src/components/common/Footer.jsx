import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-brand-box">
                        <img src="/logo.png" alt="Logo" className="footer-logo" />
                        <span className="brand-title">ByteData</span>
                    </div>
                    <p className="brand-desc">Built for Data Engineers, by Data Engineers.</p>
                </div>
                <div className="footer-links-group">
                    <div className="link-col">
                        <h4>Produto</h4>
                        <a href="#">Recursos</a>
                        <a href="#">Integrações</a>
                        <a href="#">Changelog</a>
                    </div>
                    <div className="link-col">
                        <h4>Empresa</h4>
                        <a href="#">Sobre</a>
                        <a href="#">Blog</a>
                        <a href="#">Carreiras</a>
                    </div>
                    <div className="link-col">
                        <h4>Legal</h4>
                        <a href="#">Privacidade</a>
                        <a href="#">Termos</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 ByteData Engine Platform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
