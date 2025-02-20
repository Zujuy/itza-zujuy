// src/components/Communities/Communities.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import womenTechmakersLogo from '../../assets/iamremarkable_logo.jpeg';
import iamRemarkableLogo from '../../assets/techfem.png';
import technolatinasLogo from '../../assets/technolatinas.jpeg';
import techfemLogo from '../../assets/women-techmakers.jpeg';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CommunityCard = styled(motion.div)`
  background: #f1f1f1;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0,0,0,0.15);
  }
`;

const Logo = styled.img`
  max-width: 120px;
  margin-bottom: 0.5rem;
`;

const CommunityName = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.primaryColor};
`;

const Communities = () => {
  const communities = [
    { name: 'Women Techmakers', logo: womenTechmakersLogo },
    { name: 'I Am Remarkable', logo: iamRemarkableLogo },
    { name: 'Technolatinas', logo: technolatinasLogo },
    { name: 'TechFEM', logo: techfemLogo },
  ];
  return (
    <Section
      id="communities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Comunidades</h2>
      <Container>
        {communities.map((community, index) => (
          <CommunityCard key={index}>
            <Logo src={community.logo} alt={community.name} />
            <CommunityName>{community.name}</CommunityName>
          </CommunityCard>
        ))}
      </Container>
    </Section>
  );
};

export default Communities;
