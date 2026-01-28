import React from 'react';

const TrustSection = () => {
  return (
    <section
      className="trust-section"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)'
      }}
    >
      <div
        className="section-header"
        style={{
          marginBottom: '4rem',
          maxWidth: '760px',
          marginInline: 'auto',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '2.1rem',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}
        >
          Arquitetura em que CTOs e Líderes de Dados confiam
        </h2>

        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            fontSize: '1.05rem'
          }}
        >
          Cada decisão arquitetural foi pensada para garantir previsibilidade,
          segurança e estabilidade em ambientes de produção.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <TrustCard
          title="Dados Imutáveis por Design"
          desc="A camada RAW preserva o dado original intacto, permitindo auditoria completa, rastreabilidade e reprocessamento seguro a qualquer momento."
        />

        <TrustCard
          title="Contrato de Dados via Views"
          desc="A Business Semantic Layer garante estabilidade para BI e APIs, mesmo quando o modelo interno evolui."
        />

        <TrustCard
          title="Segurança e Acesso Controlado"
          desc="A API opera como gateway zero-trust, protegendo dados sensíveis com autenticação, rate limiting e controle granular de permissões."
        />

        <TrustCard
          title="Processamento no Lugar Certo"
          desc="Transformações pesadas executam diretamente no banco, reduzindo latência, custos de infraestrutura e dependência de pipelines externos."
        />
      </div>
    </section>
  );
};

const TrustCard = ({ title, desc }) => (
  <div
    className="trust-card"
    style={{
      background: 'var(--bg-surface)',
      borderRadius: '16px',
      padding: '2.25rem',
      border: '1px solid var(--border)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
      transition: 'all 0.25s ease',
      position: 'relative'
    }}
  >
    {/* Accent line */}
    <div
      style={{
        width: '36px',
        height: '4px',
        background: 'var(--primary)',
        borderRadius: '4px',
        marginBottom: '1.25rem'
      }}
    />

    <h3
      style={{
        fontSize: '1.15rem',
        marginBottom: '0.75rem',
        fontWeight: 600,
        color: 'var(--secondary)'
      }}
    >
      {title}
    </h3>

    <p
      style={{
        color: 'var(--text-muted)',
        lineHeight: 1.65,
        fontSize: '0.95rem'
      }}
    >
      {desc}
    </p>

     

      


  </div>
);

export default TrustSection;
