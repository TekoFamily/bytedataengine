import React from 'react';
import './Problems.css';

const Problems = () => {
    return (
        <section className="problems-section">
            <div className="problems-header">
                <h2 className="problems-title">Sua Engenharia de Dados: Antes vs. Depois</h2>
                <p className="problems-desc">
                    Veja a diferença entre manter pipelines frágeis e utilizar um motor de dados enterprise.
                </p>
            </div>

            <div className="problems-grid">
                {/* BEFORE */}
                <div className="problem-card pain">
                    <div className="problem-badges badge-pain">
                        ❌ O CAOS ATUAL
                    </div>
                    <ul className="problem-list">
                        <ListItem icon="⚠️" text="Dependência total do time de TI para qualquer novo relatório." />
                        <ListItem icon="📉" text="Pipelines quebram quando alguém muda uma coluna no Excel." />
                        <ListItem icon="🐢" text="Lentidão e custos altos com cloud processando dados duplicados." />
                        <ListItem icon="🔒" text="Segurança frágil: Planilhas com dados sensíveis por e-mail." />
                    </ul>
                </div>

                {/* AFTER */}
                <div className="problem-card gain">
                    <div className="problem-badges badge-gain">
                        ✅ COM BYTEDATA ENGINE
                    </div>
                    <ul className="problem-list">
                        <ListItem icon="🚀" text="Autonomia: Área de negócio sobe CSVs e ganha API instantânea." />
                        <ListItem icon="🛡️" text="Estabilidade: Views semânticas protegem o BI de mudanças na origem." />
                        <ListItem icon="⚡" text="Performance: Processamento nativo no banco, zero latência." />
                        <ListItem icon="🔐" text="Governança: Acesso controlado e auditável via API Gateway." />
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ListItem = ({ icon, text }) => (
    <li className="problem-item">
        <span className="problem-icon">{icon}</span>
        <span className="problem-text">{text}</span>
    </li>
);

export default Problems;
