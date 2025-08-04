import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiPhp, SiNodedotjs, SiExpress, SiDrupal } from 'react-icons/si';

const Section = styled(motion.section)`
  padding: 5rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
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
    height: 3px;
    background: ${props => props.theme.accentColor};
    border-radius: 5px;
  }
`;

const Text = styled(motion.p)`
  max-width: 600px;
  color: ${(props) => props.theme.secondaryColor};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const LinkedInButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background: ${(props) => props.theme.primaryColor};
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${(props) => props.theme.accentColor};
    transform: scale(1.05);
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    transform: scale(1.2);
  }
`;

const icons = [
  { Component: FaJsSquare, title: "JavaScript" },
  { Component: FaReact, title: "React" },
  { Component: FaHtml5, title: "HTML5" },
  { Component: FaCss3Alt, title: "CSS3" },
  { Component: SiPhp, title: "PHP" },
  { Component: SiTypescript, title: "TypeScript" },
  { Component: SiNodedotjs, title: "Node.js" },
  { Component: SiExpress, title: "Express" },
  { Component: FaGitAlt, title: "Git" },
  { Component: FaGithub, title: "GitHub" },
  { Component: SiDrupal, title: "Drupal" },
];

const Experience = () => {
  const { t } = useTranslation();
  return (
    <Section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Content>
        <Title>{t('experience.title')}</Title>
        <Text>
          d{t('experience.text')}
        </Text>
        
        {/* Botón de LinkedIn */}
        <LinkedInButton 
          href="https://www.linkedin.com/in/itza-blanco/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
          Ver mi LinkedIn
        </LinkedInButton>

      </Content>
      <Grid>
        {icons.map(({ Component, title }, index) => (
          <IconWrapper 
            key={index} 
            title={title}
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Component />
          </IconWrapper>
        ))}
      </Grid>
    </Section>
  );
};

export default Experience;
