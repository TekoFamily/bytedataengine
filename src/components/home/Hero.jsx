
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeadModal from './LeadModal';
import './Hero.css';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-badge-new">
          NOVO: ENTERPRISE DATA ENGINE
        </div>

        <h1 className="hero-title">
          Transforme Dados Brutos em Decisões de Negócio — Sem Quebrar o BI.
        </h1>

        <p className="hero-lead">
          Elimine o caos de planilhas e scripts frágeis. O ByteData Engine
          centraliza a ingestão, garante a governança e serve dados prontos para o
          Power BI, devolvendo a autonomia para o seu negócio.
        </p>

        <div className="hero-actions">
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => setOpenModal(true)}
          >
            Ver Demonstração Enterprise
          </button>

          <button
            className="hero-btn hero-btn-outline"
            onClick={() => setOpenModal(true)}
          >
            Falar com Especialista
          </button>
        </div>

        <div className="hero-visual-container">
          <img
            src="/sistema.png"
            alt="Dashboard do Sistema - Visão Enterprise"
            className="hero-system-img"
          />
        </div>
      </section>

      {openModal && <LeadModal onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Hero;
