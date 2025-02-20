// src/components/Favorites/Favorites.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGuitar, FaBasketballBall, FaBook } from 'react-icons/fa';
import { GiMountainClimbing, GiBallerinaShoes } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.accentColor};
  margin-bottom: 0.5rem;
`;

const ActivityName = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${props => props.theme.primaryColor};
`;

const Description = styled.p`
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1rem;
  color: ${props => props.theme.secondaryColor};
`;

const Favorites = () => {
  const activities = [
    { name: 'Climbing', icon: <GiMountainClimbing /> },
    { name: 'Conciertos', icon: <MdMusicNote /> },
    { name: 'Poledance', icon: <GiBallerinaShoes /> },
    { name: 'Basketball', icon: <FaBasketballBall /> },
    { name: 'Guitarra', icon: <FaGuitar /> },
    { name: 'Lectura', icon: <FaBook /> },
  ];

  return (
    <Section
      id="favorites"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Mis Pasiones y Más</h2>
      <CardsGrid>
        {activities.map((activity, index) => (
          <Card key={index}>
            <IconWrapper>{activity.icon}</IconWrapper>
            <ActivityName>{activity.name}</ActivityName>
          </Card>
        ))}
      </CardsGrid>
      <Description>
        Soy creadora de contenido en <strong>TikTok</strong>, compartiendo experiencias y consejos.
      </Description>
    </Section>
  );
};

export default Favorites;
