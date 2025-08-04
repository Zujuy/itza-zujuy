import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import womenTechmakersLogo from '../../assets/women-techmakers.jpeg';
import iamRemarkableLogo from '../../assets/iamremarkable_logo.jpeg';
import technolatinasLogo from '../../assets/technolatinas.jpeg';
import techfemLogo from '../../assets/techfem.png';
import wowLogo from '../../assets/womenOfWarner.png';
import woSecLogo from '../../assets/WoSEC.png';
import ajolotesLogo from '../../assets/ajolotes.png';
import LiT from '../../assets/LiT.jpg'

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  border: none;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 3px;
    background: ${props => props.theme.accentColor};
    border-radius: 5px;
  }
  `;

const Text = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CommunityCard = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  transition: transform 0.3s ease;

  &:hover img {
    filter: brightness(0.7);
    background-color: rgba(128, 0, 128, 0.3);
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: background-color 0.3s ease, filter 0.3s ease;
`;

const communities = [
  { name: 'Latinas In Tech', logo: LiT, link: 'https://latinasintech.org/chapter/mexico' },
  { name: 'Women Techmakers', logo: womenTechmakersLogo, link: 'https://www.womentechmakers.com/' },
  { name: 'I Am Remarkable', logo: iamRemarkableLogo, link: 'https://iamremarkable.withgoogle.com/' },
  { name: 'Technolatinas', logo: technolatinasLogo, link: 'https://technolatinas.org/' },
  { name: 'TechFEM', logo: techfemLogo },
  { name: 'Women Of Warner', logo: wowLogo },
  { name: 'WoSEC México', logo: woSecLogo, link: 'https://www.wosecmexico.org/' },
  { name: 'AWS Ajolotes en la nube', logo: ajolotesLogo, link: 'https://ajolotesenlanube.com/' },
];

const Communities = () => {
  return (
    <Section
      id="communities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Content>
        <Title>Comunidades</Title>
        <Text>
          Creo firmemente en el poder de la comunidad para aprender, crecer y crear impacto, por eso participo activamente en varias comunidades, soy Chapter Leader de México para Latinas In Tech,formo parte de iniciativas como I Am Remarkable, Women Tech Makers, Technolatinas, Women Of Warner, entre otras, donde contribuyo compartiendo conocimiento, mentoría y apoyo a más personas dentro del ecosistema tecnológico, principalmente apoyo a mujeres en tecnología.
        </Text>
        <Text>
          Estas comunidades me han permitido conectar con profesionales increíbles, participar en eventos y fortalecer mi compromiso con la inclusión y la diversidad en la industria.
        </Text>
        <Text>
          Si quieres conocer más o sumarte a alguna de estas comunidades, ¡te invito a ser parte del cambio! 💜🚀
        </Text>
      </Content>
      <Container>
        {communities.map((community, index) => (
          <CommunityCard key={index} href={community.link} target="_blank" rel="noopener noreferrer">
            <Logo src={community.logo} alt={community.name} />
          </CommunityCard>
        ))}
      </Container>
    </Section>
  );
};

export default Communities;
