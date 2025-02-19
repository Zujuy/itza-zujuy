// src/components/ContactForm/ContactForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  background: #007acc;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #005999;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #007acc;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se integraría la lógica de envío (API, EmailJS, etc.)
    setStatus('Enviando...');
    setTimeout(() => {
      setStatus('Mensaje enviado. ¡Gracias por contactarme!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <Section id="contact">
      <h2>Contacto</h2>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input 
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input 
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextArea 
            name="message"
            placeholder="Mensaje"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Enviar</Button>
        </Form>
        {status && <StatusMessage>{status}</StatusMessage>}
      </FormContainer>
    </Section>
  );
};

export default ContactForm;
