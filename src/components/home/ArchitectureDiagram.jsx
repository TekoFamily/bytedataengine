import React from 'react';

/**
 * ArchitectureDiagram Component
 * 
 * Visual representation of the Hub & Spoke architecture data flow.
 * Displays the journey from Source (CSV/ERP) -> Enigne (MySQL) -> Output (Power BI/Web).
 */
const ArchitectureDiagram = () => {
    return (
        <div className="arch-diagram-wrapper" style={{ paddingBottom: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Arquitetura Hub & Spoke</h2>
                <p>O sistema atua como um motor intermediário que normaliza o caos antes do consumo.</p>
            </div>

            <div className="arch-diagram-container" style={{ background: 'var(--bg-surface)', padding: '4rem 2rem', borderRadius: '1.5rem', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="bg-grid" style={{ opacity: 0.5 }}></div>

                <div className="arch-flow">
                    {/* Source */}
                    <div className="arch-node consumer ext">
                        <span className="node-icon">🔌</span>
                        <strong>External ERP</strong>
                    </div>


                    <div className="arch-node source">
                        <span className="node-icon">📄</span>
                        <strong>CSV Input</strong>
                        <span className="node-meta">Upload Manual / API</span>
                    </div>

                    <div className="arch-connector">
                        <span className="conn-label">JSON Stream</span>
                        <div className="conn-line"></div>
                        <span className="conn-arrow">►</span>
                    </div>

                    {/* ENGINE CORE */}
                    <div className="arch-group">
                        <div className="group-label">ENGINE CORE (MySQL)</div>
                        <div className="arch-node engine">
                            <span className="node-icon">⚙️</span>
                            <strong>Stored Procedure</strong>
                            <span className="node-meta">JSON  Table</span>
                        </div>
                        <div className="arch-mini-flow">
                            <span>⬇</span>
                        </div>
                        <div className="arch-node db">
                            <span className="node-icon">🗄️</span>
                            <strong>RAW Table</strong>
                            <span className="node-meta">Dados Brutos</span>
                        </div>
                        <div className="arch-mini-flow">
                            <span>⬇</span>
                        </div>
                        <div className="arch-node view">
                            <span className="node-icon">👁️</span>
                            <strong>Smart View</strong>
                            <span className="node-meta">Limpeza & Tipagem</span>
                        </div>
                    </div>

                    <div className="arch-connector">
                        <span className="conn-label">REST API</span>
                        <div className="conn-line"></div>
                        <span className="conn-arrow">►</span>
                    </div>

                    {/* Consumers */}
                    <div className="arch-node-stack">
                        <div className="arch-node consumer pbi">
                            <span className="node-icon">📊</span>
                            <strong>Power BI</strong>
                        </div>
                        <div className="arch-node consumer web">
                            <span className="node-icon">🌐</span>
                            <strong>Web App</strong>
                        </div>
                        <div className="arch-node consumer ext">
                            <span className="node-icon">🔌</span>
                            <strong>External ERP</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
