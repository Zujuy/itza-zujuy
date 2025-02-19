// src/components/Favorites/Favorites.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGuitar, FaBasketballBall, FaBook } from 'react-icons/fa';
import { GiMountainClimbing, GiBallerinaShoes } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7;
  text-align: center;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled.div`
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
  color: #007acc;
  margin-bottom: 0.5rem;
`;

const ActivityName = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1rem;
  color: #555;
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
    <Section id="favorites">
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
        Además, soy creadora de contenido en <strong>TikTok</strong>, compartiendo mis experiencias, tips y momentos inspiradores.
      </Description>
    </Section>
  );
};

export default Favorites;
