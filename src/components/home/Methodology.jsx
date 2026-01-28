import React, { useState } from 'react';
import './Methodology.css';

const layers = [
    {
        number: "01",
        title: "Camada de Controle (Metadata-Driven)",
        desc: "Definição centralizada de regras de negócio. Nenhuma lógica fica hardcoded na aplicação, garantindo agilidade em mudanças.",
        specs: [
            "Catálogo de Dados Ativo",
            "Mapeamento de Linhagem (Lineage)",
            "Definição de Views Semânticas",
            "Controle de Acesso (RBAC)"
        ]
    },
    {
        number: "02",
        title: "Ingestion Layer (Schema-on-Write)",
        desc: "Motor de ingestão universal e agnóstico. Transforma qualquer CSV ou stream de dados em objetos estruturados prontos para análise.",
        specs: [
            "Parser Streaming Otimizado",
            "Normalização Automática",
            "Database-Native Processing",
            "Insert Batch de Alta Performance"
        ]
    },
    {
        number: "03",
        title: "Business Semantic Layer & API",
        desc: "Onde o dado vira inteligência. O Power BI conecta-se apenas a Views estáveis e APIs governadas, blindando os relatórios de mudanças estruturais.",
        specs: [
            "Endpoint REST Padronizado",
            "Filtros de URL Dinâmicos",
            "Imutabilidade da Fonte (Raw Layer)",
            "Entrega em JSON Otimizado"
        ]
    }
];

const Methodology = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === layers.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? layers.length - 1 : prev - 1));
    };

    return (
        <section className="methodology-section">

            {/* DEEP DIVE LAYERS - CAROUSEL */}
            <div className="carousel-container">
                <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                    {layers.map((layer, index) => (
                        <div key={index} className="carousel-slide">
                            <LayerDetail {...layer} isHighlight={index === 2} />
                        </div>
                    ))}
                </div>

                <div className="carousel-controls">
                    <button className="carousel-btn" onClick={prevSlide} aria-label="Previous slide">&larr;</button>
                    <div className="carousel-dots">
                        {layers.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                                onClick={() => setActiveSlide(index)}
                            />
                        ))}
                    </div>
                    <button className="carousel-btn" onClick={nextSlide} aria-label="Next slide">&rarr;</button>
                </div>
            </div>

            {/* IMPLEMENTATION TIMELINE */}
            <div className="timeline-section">
                <div className="timeline-header">
                    <h2>Roadmap de Implementação</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Ciclo típico de entrega (4-6 semanas)</p>
                </div>

                <div className="timeline-container">
                    <TimelineStep
                        idx="01"
                        week="Semanas 1-2"
                        title="Conexão & Ingestão (Setup)"
                        desc="Configuração da VPC, conexão segura com suas fontes (ERP, CRM) e instalação dos agentes de ingestão. Em 5 dias, o dado raw já está landing no seu Data Lake."
                    />
                    <TimelineStep
                        idx="02"
                        week="Semana 3"
                        title="Modelagem & Regras de Negócio"
                        desc="Mapeamento das tabelas cruciais. Criamos as Views Semânticas, definimos KPIs e aplicamos a camada de governança e controle de acesso."
                    />
                    <TimelineStep
                        idx="03"
                        week="Semanas 4-5"
                        title="Validação & Dashboards"
                        desc="Conexão do Power BI/Tableau. Seu time valida os números. Treinamento dos key-users para Self-Service BI."
                    />
                    <TimelineStep
                        idx="04"
                        week="Semana 6+"
                        title="Go-Live & Evolução"
                        desc="Entrega oficial. O motor entra em piloto automático. Seu time foca apenas em criar novos insights, enquanto nós garantimos a estabilidade."
                    />
                </div>
            </div>
        </section>
    );
};

const TimelineStep = ({ idx, week, title, desc }) => (
    <div className="timeline-step">
        <div className="timeline-marker">
            {idx}
            <span>{week}</span>
        </div>
        <div className="timeline-content">
            <h3 className="timeline-title">{title}</h3>
            <p className="timeline-desc">{desc}</p>
        </div>
    </div>
);

const LayerDetail = ({ number, title, desc, specs, isHighlight }) => (
    <div className={`layer-card ${isHighlight ? 'highlight' : ''}`}>
        <div className="layer-number">{number}</div>
        <div>
            <h3 className="layer-title">{title}</h3>
            <p className="arch-layer-desc">{desc}</p>
        </div>
        <div className="layer-specs">
            <h5 className="arch-specs-title">Especificações Técnicas</h5>
            <ul className="arch-specs-list">
                {specs.map((item, i) => (
                    <li key={i} className="arch-spec-item">
                        <span className="arch-check-icon">✓</span> {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default Methodology;
