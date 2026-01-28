import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './LeadModal.css';

/**
 * LeadModal Component
 * 
 * A modal dialog for capturing user lead information (Name, Email, Phone).
 * Uses EmailJS to send the form data.
 * 
 * @param {Object} props
 * @param {Function} props.onClose - Function to close the modal
 */
const LeadModal = ({ onClose }) => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_qgsxrkf',      // Service ID
        'template_uadsc0r',     // Template ID
        {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone
        },
        '2DwqkJ8Ea__gGQvEm'      // Public Key
      );

      setSuccess(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div className="lead-modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="lead-modal-close" aria-label="Close modal">×</button>

        {!success ? (
          <>
            <div className="lead-modal-header">
              <span className="lead-modal-badge">Enterprise</span>
              <h3 className="lead-modal-title">Fale com um especialista</h3>
              <p className="lead-modal-subtitle">
                Veja como aplicar essa arquitetura no seu ambiente real.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <Input
                label="Nome completo"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Ex: João Silva"
              />
              <Input
                label="Email corporativo"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="joao@empresa.com"
              />
              <Input
                label="Telefone / WhatsApp"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
              />

              <button
                type="submit"
                disabled={loading}
                className="lead-modal-button"
              >
                {loading ? 'Enviando...' : 'Solicitar contato'}
              </button>
            </form>
          </>
        ) : (
          <div className="lead-modal-success">
            <h3 className="lead-modal-title">Obrigado 🚀</h3>
            <p className="lead-modal-subtitle">
              Nosso time entrará em contato em breve.
            </p>

            <button className="lead-modal-secondary-button" onClick={onClose}>
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Reusable Input Field for the Modal
 */
const Input = ({ label, ...props }) => (
  <div className="lead-modal-field">
    <label className="lead-modal-label">{label}</label>
    <input className="lead-modal-input" required {...props} />
  </div>
);

export default LeadModal;
