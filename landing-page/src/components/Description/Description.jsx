// src/components/Description/Description.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import graphic from '../../assets/experience-graphic-svg';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f7f7f7;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666;
`;

const Graphic = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Description = () => {
  return (
    <Section id="description">
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a Mi Mundo Digital
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Combinando tecnología, diseño y creatividad para transformar ideas en realidad.
      </Subtitle>
      <Graphic
        src={graphic}
        alt="Representación de mi experiencia"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </Section>
  );
};

export default Description;
