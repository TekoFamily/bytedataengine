import React from 'react';
import './SupportPage.css';

const SupportPage = () => {
    return (
        <section className="page-section support-section">
            <div className="support-header">
                <span className="badge-new">SUPORTE & SLA</span>
                <h1 className="section-title">Suporte Especializado</h1>
                <p className="section-subtitle">
                    Garantimos a estabilidade da sua operação de dados com SLAs agressivos e times dedicados.
                </p>
            </div>

            <div className="plans-grid">
                {/* PLANO STANDARD */}
                <div className="plan-card">
                    <div className="plan-header">
                        <h3 className="plan-name">Standard</h3>
                        <div className="plan-price">
                            <span className="currency">R$</span>
                            <span className="amount">2.5k</span>
                            <span className="period">/mês</span>
                        </div>
                        <p className="plan-desc">Para startups e operações em crescimento.</p>
                    </div>
                    <ul className="plan-features">
                        <li><span className="check">✓</span> Suporte Email (8h-18h)</li>
                        <li><span className="check">✓</span> SLA de Resposta: 24h</li>
                        <li><span className="check">✓</span> Atualizações Mensais</li>
                        <li><span className="check">✓</span> Monitoramento Básico</li>
                    </ul>
                    <button className="plan-btn outline">Escolher Standard</button>
                </div>

                {/* PLANO PRO */}
                <div className="plan-card popular">
                    <div className="popular-tag">MAIS POPULAR</div>
                    <div className="plan-header">
                        <h3 className="plan-name">Professional</h3>
                        <div className="plan-price">
                            <span className="currency">R$</span>
                            <span className="amount">5k</span>
                            <span className="period">/mês</span>
                        </div>
                        <p className="plan-desc">Para empresas com missões críticas de BI.</p>
                    </div>
                    <ul className="plan-features">
                        <li><span className="check">✓</span> <strong>Suporte WhatsApp/Slack</strong></li>
                        <li><span className="check">✓</span> SLA de Resposta: 4h</li>
                        <li><span className="check">✓</span> Engenheiro Dedicado (8h/mês)</li>
                        <li><span className="check">✓</span> Monitoramento Proativo 24/7</li>
                    </ul>
                    <button className="plan-btn primary">Escolher Professional</button>
                </div>

                {/* PLANO ENTERPRISE */}
                <div className="plan-card">
                    <div className="plan-header">
                        <h3 className="plan-name">Enterprise</h3>
                        <div className="plan-price">
                            <span className="amount">Sob Consulta</span>
                        </div>
                        <p className="plan-desc">Para grandes volumes e alta complexidade.</p>
                    </div>
                    <ul className="plan-features">
                        <li><span className="check">✓</span> Canal Prioritário 24/7</li>
                        <li><span className="check">✓</span> <strong>SLA de Resposta: 1h</strong></li>
                        <li><span className="check">✓</span> Arquiteto de Soluções Dedicado</li>
                        <li><span className="check">✓</span> Disaster Recovery & Backup</li>
                    </ul>
                    <button className="plan-btn outline">Falar com Consultor</button>
                </div>
            </div>

            <div className="maintenance-section">
                <h2>O que está incluso na manutenção?</h2>
                <div className="maintenance-grid">
                    <div className="maint-item">
                        <span className="maint-icon">🔄</span>
                        <h3>Updates de Segurança</h3>
                        <p>Patches automáticos para todas as dependências (Docker, Python, Libs).</p>
                    </div>
                    <div className="maint-item">
                        <span className="maint-icon">📈</span>
                        <h3>Otimização de Query</h3>
                        <p>Análise mensal de performance e tuning de banco de dados.</p>
                    </div>
                    <div className="maint-item">
                        <span className="maint-icon">🐛</span>
                        <h3>Bug Fixes</h3>
                        <p>Correção prioritária de falhas no motor de ingestão.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportPage;
