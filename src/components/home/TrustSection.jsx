import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-header">
        <h2 className="trust-title">
          Arquitetura em que CTOs e Líderes de Dados confiam
        </h2>
        <p className="trust-subtitle">
          Cada decisão arquitetural foi pensada para garantir previsibilidade,
          segurança e estabilidade em ambientes de produção.
        </p>
      </div>

      <div className="trust-grid">
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
  <div className="trust-card">
    <div className="trust-accent-line" />
    <h3 className="trust-card-title">{title}</h3>
    <p className="trust-card-desc">{desc}</p>
  </div>
);

export default TrustSection;
