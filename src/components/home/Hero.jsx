import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeadModal from './LeadModal';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-aos]').forEach(el =>
      observer.observe(el)
    );
  }, []);

  return (
    <>
      <section className="hero-section">
        <div
          className="badge-new"
          style={{
            background: 'var(--accent)',
            color: 'white',
            letterSpacing: '0.05em'
          }}
        >
          NOVO: ENTERPRISE DATA ENGINE
        </div>

        <h1 className="hero-title" data-aos>
          Transforme Dados Brutos em Decisões de Negócio — Sem Quebrar o BI.
        </h1>

        <p
          className="hero-lead"
          data-aos
          style={{ maxWidth: '800px', margin: '1.5rem auto' }}
        >
          Elimine o caos de planilhas e scripts frágeis. O ByteData Engine
          centraliza a ingestão, garante a governança e serve dados prontos para o
          Power BI, devolvendo a autonomia para o seu negócio.
        </p>

        <div className="hero-actions" data-aos>
          <Link
            to="/arquitetura"
            className="btn btn-primary"
            style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
          >
            Ver Demonstração Enterprise
          </Link>

          <button
            className="btn btn-outline"
            style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            onClick={() => setOpenModal(true)}
          >
            Falar com Especialista
          </button>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <span className="address-bar" style={{ display: 'none' }}></span>
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
