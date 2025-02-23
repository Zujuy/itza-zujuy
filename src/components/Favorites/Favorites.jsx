import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGuitar, FaBasketballBall, FaBook, FaTiktok } from 'react-icons/fa';
import { GiMountainClimbing, GiBallerinaShoes } from 'react-icons/gi';
import { MdMusicNote } from 'react-icons/md';

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Section = styled(motion.section)`
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

const IconGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const Text = styled(motion.p)`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 20px;
  color: ${(props) => props.theme.secondaryColor};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: ${(props) => props.theme.accentColor};
  transition: transform 0.3s ease, color 0.3s ease;
  animation: ${floatAnimation} 2s infinite ease-in-out;
  cursor: pointer;

  &:hover {
    color: rgba(128, 0, 128, 1);
    transform: scale(1.5) rotate(360deg);
  }
`;

const TikTokLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  background: #000;
  color: #fff;
  border-radius: 30px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #ff0050;
    transform: scale(1.1);
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryColor};
`;

const activities = [
  { name: 'Climbing', icon: <GiMountainClimbing /> },
  { name: 'Conciertos', icon: <MdMusicNote /> },
  { name: 'Poledance', icon: <GiBallerinaShoes /> },
  { name: 'Basketball', icon: <FaBasketballBall /> },
  { name: 'Guitarra', icon: <FaGuitar /> },
  { name: 'Lectura', icon: <FaBook /> },
];

const Favorites = () => {
  return (
    <Section
      id="favorites"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Mis Pasiones y Más</Title>
      <IconGrid>
        {activities.map((activity, index) => (
          <IconWrapper key={index} title={activity.name}>
            {activity.icon}
          </IconWrapper>
        ))}
      </IconGrid>
      <Text>
        <p>Más allá de la tecnología, me encanta explorar diferentes formas de expresión y movimiento. Disfruto escalar, practicar pole dance, ir a conciertos y tocar la guitarra, siempre buscando nuevas experiencias que me reten y me inspiren.</p>

        <p>Además, me apasiona crear contenido educativo sobre tecnología. Mi enfoque no es la monetización, sino compartir conocimiento y hacerlo accesible para más personas.</p>

        <p>Para mí, la combinación entre el movimiento, la música y la tecnología es la clave para mantenerme inspirada 🎶</p>
      </Text>
      <TikTokLink href="https://www.tiktok.com/@itzazujuy" target="_blank" rel="noopener noreferrer">
        <FaTiktok /> Ver mis videos en TikTok
      </TikTokLink>
      <Description>
        Soy creadora de contenido en <strong>TikTok</strong>, compartiendo experiencias y consejos.
      </Description>
    </Section>
  );
};

export default Favorites;


