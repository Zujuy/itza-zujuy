import React, { useState, useRef, useEffect } from 'react'; // ✅ Se agregó useRef
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import conf1 from '../../assets/conferences/conf1.jpg';
import conf2 from '../../assets/conferences/conf2.jpg';
import conf3 from '../../assets/conferences/conf3.jpg';
import conf4 from '../../assets/conferences/conf4.jpg'; 
import conf5 from '../../assets/conferences/conf5.jpg'; 
import conf6 from '../../assets/conferences/conf6.jpg';
import conf7 from '../../assets/conferences/conf7.png';
import conf8 from '../../assets/conferences/conf8.jpeg';
import conf9 from '../../assets/conferences/conf9.jpeg';
import conf10 from '../../assets/conferences/conf10.jpeg';


const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #121212;
  text-align: center;
  color: #fff;
  overflow: hidden;
  position: relative;
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
    width: 100px;
    height: 3px;
    background: ${props => props.theme.accentColor};
    margin: 10px auto;
    border-radius: 5px;
  }
`;

const Text = styled(motion.p)`
  max-width: 1200px;
  margin: 0 auto;
  color: ${props => props.theme.secondaryColor};
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GalleryWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilmStrip = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  min-width: 300%;
  will-change: transform;
  animation: ${props => (props.paused ? "none" : "scrollLoop 40s linear infinite")};

  @keyframes scrollLoop {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  @media (max-width: 768px) {
    animation: ${props => (props.paused ? "none" : "scrollLoop-fast 12s linear infinite")};
  }

  @keyframes scrollLoop-fast {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 250px;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    flex: 0 0 200px;
  }

  @media (max-width: 480px) {
    flex: 0 0 180px; 
  }
`;


const images = [
  { src: conf1, text: "Women Of Wraner: Level up", details: "Women Of Wraner: Level up. Workshop crea tu videojuego." },
  { src: conf2, text: "Women Of Warner: Level up", details: "Women Of Wraner: Level up. Workshop crea tu videojuego." },
  { src: conf3, text: "Women of Warner: Level up", details: "Women Of Wraner: Level up. Workshop crea tu videojuego." },
  { src: conf4, text: "Nerdearla México 2024", details: "Nerdearla México 2024. Host del evento" },
  { src: conf5, text: "MetaWolrd Congress LATAM", details: "MetaWolrd Congress LATAM. Roundtable: El futuro en manos de los innovadores jóvenes" },
  { src: conf6, text: "MetaWolrd Congress LATAM", details: "MetaWolrd Congress LATAM. Roundtable: El futuro en manos de los innovadores jóvenes" },
  { src: conf7, text: "Universidad Autonoma del Estado de Hidalgo", details: "Universidad Autonoma del estado de hidalgo. Plática de carrera y networking" },
  { src: conf8, text: "Evento CISCO 2024", details: "Evento CISCO 2024. Plática de cambio de carrera." },
  { src: conf9, text: "Premios I am remarkable 2025", details: "Premios I am remarkable 2025. Evento de I am Remarkable 2024." },
  { src: conf10, text: "Nerdearla 2024", details: "Nerdearla 2024. Los 3 host de nerdearla 2024 en ciudad de México" }
];

const infiniteImages = [...images, ...images];

const Conferences = () => {
  const { t } = useTranslation();
  const filmStripRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const speed = 1.5;

  useEffect(() => {
    const filmStrip = filmStripRef.current;
    if (!filmStrip || paused) return;

    let animationFrame;
    let lastTime = performance.now();
    let position = 0;

    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      position -= (speed * deltaTime) / 16;

      if (Math.abs(position) >= filmStrip.scrollWidth / 2) {
        position = 0;
      }

      filmStrip.style.transform = `translateX(${position}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  const handleClick = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
      setPaused(false);
    } else {
      setFlippedIndex(index);
      setPaused(true);
    }
  };

  return (
    <Section id="conferences" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Title>{t('conference.title')}</Title>
      <Text>
      <p>{t('conference.text')}</p>

      <p>A{t('conference.text1')}</p>

      <p>{t('conference.text2')}</p>
      </Text>

      <GalleryWrapper>
        <FilmStrip ref={filmStripRef} paused={paused}> {}
          {infiniteImages.map((image, index) => {
            const originalIndex = index % images.length;

            return (
              <ImageContainer key={index} onClick={() => handleClick(originalIndex)}>
                <img src={image.src} alt={`Conferencia ${originalIndex + 1}`} style={{ width: "100%", borderRadius: "10px" }} />
                {flippedIndex === originalIndex && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #8F77A6, #6A518C)",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "10px"
                  }}>
                    <p>{image.details}</p>
                  </div>
                )}
              </ImageContainer>
            );
          })}
        </FilmStrip>
      </GalleryWrapper>
    </Section>
  );
};

export default Conferences;