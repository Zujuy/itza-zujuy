import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  color: ${props => props.theme.primaryColor};

  &::after {
    content: "";
    display: block;
    height: 3px;
    background: ${props => props.theme.accentColor};
    margin: 10px auto;
    border-radius: 5px;
  }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: ${({ error, theme }) => (error ? 'red' : '#666')};
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  pointer-events: none;
  background: white;
  padding: 0 5px;

  ${({ active, theme }) =>
    active &&
    `
    top: 8px;
    font-size: 0.85rem;
    color: ${theme.primaryColor};
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  border: 2px solid ${({ error, theme }) => (error ? 'red' : '#ccc')};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s ease-in-out;
  background: transparent;

  &:focus {
    border-color: ${({ error, theme }) => (error ? 'red' : theme.primaryColor)};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 12px;
  border: 2px solid ${({ error, theme }) => (error ? 'red' : '#ccc')};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  height: 120px;
  transition: border 0.3s ease-in-out;
  background: transparent;

  &:focus {
    border-color: ${({ error, theme }) => (error ? 'red' : theme.primaryColor)};
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.helperColor};
  color: #fff;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ theme }) => theme.primaryColor};
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
`;

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    if (value.trim() === '') {
      error = 'Este campo es obligatorio.';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'El email no es válido.';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error || undefined, // Elimina el error si el campo es corregido
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '') &&
           Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (formData[key].trim() === '') {
        newErrors[key] = 'Este campo es obligatorio.';
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setStatus('Enviando...');

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message
    };

    try {
      const response = await emailjs.send(
        'service_s16dbre',
        'template_arwc1p5',
        templateParams,
        's9bYuyBAGkT6sa-gu'
      );

      console.log('Correo enviado con éxito:', response);
      setLoading(false);
      setStatus('Mensaje enviado. ¡Gracias por contactarme!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar:', error);
      setLoading(false);
      setStatus('Error al enviar. Inténtalo de nuevo.');
    }
  };

  return (
    <Section id="contact">
      <Title>{t('form.title')}</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {['name', 'email', 'subject', 'message'].map((field, index) => (
            <InputGroup key={index}>
              <Label htmlFor={field} error={errors[field]} active={formData[field]}>
                {t(`form.${field === 'email' ? 'mail' : field}`)}
              </Label>
              {field === 'message' ? (
                <TextArea id={field} name={field} value={formData[field]} onChange={handleChange} error={errors[field]} />
              ) : (
                <Input id={field} type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={handleChange} error={errors[field]} />
              )}
              {errors[field] && <ErrorMessage>{errors[field]}</ErrorMessage>}
            </InputGroup>
          ))}
          <Button type="submit" disabled={loading || !isFormValid()}>
            {loading ? t('form.sending') || 'Enviando...' : t('form.cta')}
          </Button>
        </Form>
        {status && <StatusMessage>{status}</StatusMessage>}
      </FormContainer>
    </Section>
  );
};

export default ContactForm;


