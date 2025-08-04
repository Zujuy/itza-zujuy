import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo-itzazujuy-blanco.png';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.secondaryColor};
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
  transition: background 0.3s ease, padding 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  img {
    height: 35px;
    width: auto;
    margin-right: 10px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1100; /* Asegurar que está encima del menú */

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    padding-bottom: 4px;
    position: relative;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.accentColor};
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.accentColor};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.secondaryColor};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
    z-index: 1000;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;

    a {
      font-size: 1.2rem;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer href="#">
        <img src={logo} alt="Logo" />
        Itza Zujuy
      </LogoContainer>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav open={menuOpen}>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('menu.experience')}</a>
        <a href="#conferences" className={activeSection === 'conferences' ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('menu.conference')}</a>
        <a href="#communities" className={activeSection === 'communities' ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('menu.community')}</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>{t('menu.contact')}</a>
        <a href="https://www.linkedin.com/in/itza-blanco/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>LinkedIn</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
