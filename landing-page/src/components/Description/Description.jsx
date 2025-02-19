// src/components/Description/Description.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import graphic from '../../assets/experience-graphic.svg';

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
  console.log('Renderizando Description sin motion');
  return (
    <Section id="description">
      <Title>Bienvenido a Mi Mundo Digital</Title>
      <Subtitle>
        Combinando tecnología, diseño y creatividad para transformar ideas en realidad.
      </Subtitle>
      <Graphic
        src={graphic}
        alt="Representación de mi experiencia"
      />
    </Section>
  );
};

export default Description;
