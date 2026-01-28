import React from 'react';

const FeatureCard = ({ icon, title, desc }) => (
    <div className="feature-card">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="section-header">
                <h2>Tudo o que você precisa para escalar.</h2>
                <p>Elimine gargalos de dados sem adicionar complexidade.</p>
            </div>

            <div className="features-grid">
                <FeatureCard
                    icon="⚡"
                    title="Schema Discovery"
                    desc="O motor detecta tipos de dados automaticamente e cria tabelas otimizadas."
                />
                <FeatureCard
                    icon="🔒"
                    title="Enterprise Security"
                    desc="APIs REST geradas com autenticação JWT e RBAC prontos para produção."
                />
                <FeatureCard
                    icon="🔄"
                    title="Zero-Code ETL"
                    desc="Stored Procedures lidam com a limpeza e normalização. Foque nos insights."
                />
                <FeatureCard
                    icon="📊"
                    title="BI Connectors"
                    desc="Integração nativa com Power BI, Tableau e Metabase."
                />
            </div>
        </section>
    );
};

export default Features;
