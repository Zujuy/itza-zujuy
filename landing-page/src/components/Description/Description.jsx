// src/components/Description/Description.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import graphic from '../../assets/experience-graphic.svg';

const Section = styled(motion.section)`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.secondaryColor};
`;

const Graphic = styled(motion.img)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Description = () => {
  return (
    <Section
      id="description"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Bienvenido a Mi Mundo Digital</Title>
      <Subtitle>
        Transformando ideas en experiencias digitales a través de tecnología y diseño.
      </Subtitle>
      <Graphic
        src={graphic}
        alt="Representación de mi experiencia"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </Section>
  );
};

export default Description;
