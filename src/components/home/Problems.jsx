import React from 'react';

const Problems = () => {
    return (
        <section className="comparison-section" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Sua Engenharia de Dados: Antes vs. Depois</h2>
                <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Veja a diferença entre manter pipelines frágeis e utilizar um motor de dados enterprise.
                </p>
            </div>

            <div className="comparison-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* BEFORE */}
                <div className="card" style={{ border: '1px solid #EF4444', background: 'var(--bg-card)' }}>
                    <div style={{
                        background: '#FEF2F2', color: '#EF4444',
                        padding: '0.5rem 1rem', borderRadius: '99px',
                        display: 'inline-block', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '0.9rem'
                    }}>
                        ❌ O CAOS ATUAL
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <ListItem icon="⚠️" text="Dependência total do time de TI para qualquer novo relatório." />
                        <ListItem icon="📉" text="Pipelines quebram quando alguém muda uma coluna no Excel." />
                        <ListItem icon="🐢" text="Lentidão e custos altos com cloud processando dados duplicados." />
                        <ListItem icon="🔒" text="Segurança frágil: Planilhas com dados sensíveis por e-mail." />
                    </ul>
                </div>

                {/* AFTER */}
                <div className="card" style={{ border: '2px solid var(--primary)', background: 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        background: 'var(--bg-highlight)', color: 'var(--primary)',
                        padding: '0.5rem 1rem', borderRadius: '99px',
                        display: 'inline-block', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '0.9rem'
                    }}>
                        ✅ COM BYTEDATA ENGINE
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <span style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.5' }}>{text}</span>
    </li>
);


export default Problems;
