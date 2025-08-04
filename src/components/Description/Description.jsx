import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import graphic from '../../assets/experience-graphic.png';

const Section = styled(motion.section)`
  padding: 2rem;
  text-align: center;
  background: #ffffff;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin: 1rem 0 1rem;
  color: ${(props) => props.theme.primaryColor};
  display: inline-block;
  border-right: 3px solid ${(props) => props.theme.primaryColor};
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 1024px) { 
    font-size: 2.5rem; 
    white-space: normal;
    border-right: none; 
    text-align: center;
  }

  @media (max-width: 768px) { 
    font-size: 2rem; 
    white-space: normal;
    text-align: center; 
    border-right: none;
  }
`;



const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${props => props.theme.secondaryColor};
`;

const Text = styled(motion.p)`
  padding: 10px 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Graphic = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const LedLine = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px; // Más delgada
  background: linear-gradient(90deg, transparent, #9400D3, #8A2BE2, transparent);
  background-size: 200% 100%;
  animation: ledMove 2.5s linear infinite;

  @keyframes ledMove {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const TypingTitle = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <Title>{displayText}</Title>;
};

const Description = () => {
  const { t } = useTranslation();
  const titleText = t('description.title');

  return (
    <Section
      id="description"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <TypingTitle />
      <TypingTitle text={titleText} />
      <Subtitle>
        {t('description.subtitle')}
      </Subtitle>
      <Graphic
        src={graphic}
        alt={t('description.alt')}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <Text>{t('description.text')}</Text>
      <LedLine />
    </Section>
  );
};

export default Description;
