// src/components/Experience/Experience.jsx
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPhp, SiNodedotjs, SiExpress, SiDrupal } from 'react-icons/si';

const Section = styled.section`
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

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #007acc;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: #005999;
  }
`;

const Experience = () => {
  return (
    <Section id="experience">
      <h2>Experiencia Tecnológica</h2>
      <Grid>
        <IconWrapper title="JavaScript">
          <FaJsSquare />
        </IconWrapper>
        <IconWrapper title="React">
          <FaReact />
        </IconWrapper>
        <IconWrapper title="HTML5">
          <FaHtml5 />
        </IconWrapper>
        <IconWrapper title="CSS3">
          <FaCss3Alt />
        </IconWrapper>
        <IconWrapper title="PHP">
          <SiPhp />
        </IconWrapper>
        <IconWrapper title="TypeScript">
          <SiTypescript />
        </IconWrapper>
        <IconWrapper title="Node.js">
          <SiNodedotjs />
        </IconWrapper>
        <IconWrapper title="Express">
          <SiExpress />
        </IconWrapper>
        <IconWrapper title="Git">
          <FaGitAlt />
        </IconWrapper>
        <IconWrapper title="GitHub">
          <FaGithub />
        </IconWrapper>
        <IconWrapper title="Drupal">
          <SiDrupal />
        </IconWrapper>
      </Grid>
    </Section>
  );
};

export default Experience;
