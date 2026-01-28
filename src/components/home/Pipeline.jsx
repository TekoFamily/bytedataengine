import React from 'react';

const Pipeline = () => {
    return (
        <section id="how" className="pipeline-section">
            <div className="section-header">
                <h2>Pipeline Transparente</h2>
                <p>Entenda o fluxo dos seus dados.</p>
            </div>

            <div className="pipeline-steps">
                <div className="p-step">
                    <span className="step-num">01</span>
                    <h4>Upload</h4>
                </div>
                <div className="p-line"></div>
                <div className="p-step active">
                    <span className="step-num">02</span>
                    <h4>Parsing</h4>
                </div>
                <div className="p-line"></div>
                <div className="p-step">
                    <span className="step-num">03</span>
                    <h4>Storage</h4>
                </div>
                <div className="p-line"></div>
                <div className="p-step">
                    <span className="step-num">04</span>
                    <h4>API Gen</h4>
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
