// src/components/Conferences/Conferences.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import conf1 from '../../assets/conf1.jpg';
import conf2 from '../../assets/conf2.jpg';
import conf3 from '../../assets/conf3.jpg';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

const Conferences = () => {
  const images = [conf1, conf2, conf3];
  return (
    <Section
      id="conferences"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Conferencias y Eventos</h2>
      <Gallery>
        {images.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Conferencia ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Gallery>
    </Section>
  );
};

export default Conferences;
