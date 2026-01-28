import React, { useState } from 'react';
import ArchitectureDiagram from '../components/home/ArchitectureDiagram';
import './ArchitecturePage.css';

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

/**
 * ArchitecturePage Component
 * 
 * Displays the technical architecture of the platform.
 * Includes a visual diagram (ArchitectureDiagram) and a carousel for deep-diving into each layer.
 */
const ArchitecturePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === layers.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? layers.length - 1 : prev - 1));
    };

    return (
        <section className="page-section">
            <ArchitectureDiagram />

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
        </section>
    );
};

/**
 * LayerDetail Sub-component
 * Renders the specific details of an architecture layer.
 */
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

export default ArchitecturePage;
