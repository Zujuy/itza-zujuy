// src/components/Conferences/Conferences.jsx
import React from 'react';
import styled from 'styled-components';
import conf1 from '../../assets/images/conf1.jpg';
import conf2 from '../../assets/images/conf2.jpg';
import conf3 from '../../assets/images/conf3.jpg';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
  text-align: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  display: block;
`;

const Conferences = () => {
  const images = [conf1, conf2, conf3];
  return (
    <Section id="conferences">
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
