
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPhp, SiNodedotjs, SiExpress, SiDrupal } from 'react-icons/si';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: ${props => props.theme.accentColor};
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Experience = () => {
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

  return (
    <Section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experiencia Tecnológica</h2>
      <Grid>
        {icons.map(({ Component, title }, index) => (
          <IconWrapper key={index} title={title}>
            <Component />
          </IconWrapper>
        ))}
      </Grid>
    </Section>
  );
};

export default Experience;
