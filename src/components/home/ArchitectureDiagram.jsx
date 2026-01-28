import React from 'react';
import './ArchitectureDiagram.css';

/**
 * ArchitectureDiagram Component
 * 
 * Visual representation of the Hub & Spoke architecture data flow.
 * Displays the journey from Source (CSV/ERP) -> Enigne (MySQL) -> Output (Power BI/Web).
 * Refactored for modern "Glassmorphism" design and animations.
 */
const ArchitectureDiagram = () => {
    return (
        <div className="arch-diagram-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Arquitetura Hub & Spoke</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                    O sistema atua como um motor intermediário que normaliza o caos antes do consumo.
                </p>
            </div>

            <div className="arch-canvas">
                <div className="arch-grid-bg"></div>

                <div className="arch-layout">

                    {/* COLUMN 1: SOURCES */}
                    <div className="col-source">
                        <div className="arch-card">
                            <span className="arch-icon">🔌</span>
                            <span className="arch-title">External ERP</span>
                        </div>
                        <div className="arch-card">
                            <span className="arch-icon">📄</span>
                            <span className="arch-title">CSV Input</span>
                            <span className="arch-meta">Upload Manual / API</span>
                        </div>
                    </div>

                    {/* CONNECTOR 1 */}
                    <div className="connector-wrapper">
                        <span className="conn-label">JSON Stream</span>
                        <div className="conn-line-container">
                            <div className="conn-line-active"></div>
                        </div>
                        <span className="conn-arrow-head">►</span>
                    </div>

                    {/* COLUMN 2: ENGINE CORE */}
                    <div className="col-engine">
                        <div className="engine-container">
                            <div className="engine-label">ENGINE CORE (MySQL)</div>

                            {/* Node 1: SP */}
                            <div className="arch-card node-proc">
                                <span className="arch-icon">⚙️</span>
                                <span className="arch-title">Stored Procedure</span>
                                <span className="arch-meta">JSON Table</span>
                            </div>

                            <div className="engine-arrow">⬇</div>

                            {/* Node 2: RAW */}
                            <div className="arch-card node-raw">
                                <span className="arch-icon">🗄️</span>
                                <span className="arch-title">RAW Table</span>
                                <span className="arch-meta">Dados Brutos</span>
                            </div>

                            <div className="engine-arrow">⬇</div>

                            {/* Node 3: View */}
                            <div className="arch-card node-view">
                                <span className="arch-icon">👁️</span>
                                <span className="arch-title">Smart View</span>
                                <span className="arch-meta">Limpeza & Tipagem</span>
                            </div>
                        </div>
                    </div>

                    {/* CONNECTOR 2 */}
                    <div className="connector-wrapper">
                        <span className="conn-label">REST API</span>
                        <div className="conn-line-container">
                            <div className="conn-line-active"></div>
                        </div>
                        <span className="conn-arrow-head">►</span>
                    </div>

                    {/* COLUMN 3: CONSUMERS */}
                    <div className="col-consumers">
                        <div className="arch-card consumer-card consumer-pbi">
                            <span className="arch-icon">📊</span>
                            <span className="arch-title">Power BI</span>
                        </div>
                        <div className="arch-card consumer-card consumer-web">
                            <span className="arch-icon">🌐</span>
                            <span className="arch-title">Web App</span>
                        </div>
                        <div className="arch-card consumer-card consumer-ext">
                            <span className="arch-icon">🔌</span>
                            <span className="arch-title">External ERP</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
