import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
  margin-top: 3rem;
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Itza Zujuy. Todos los derechos reservados.</p>
      <FooterLinks>
        <a href="https://www.linkedin.com/in/itza-blanco/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Zujuy" target="_blank" rel="noopener noreferrer">GitHub</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
