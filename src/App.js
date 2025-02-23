// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import Header from 'components/Header/Header';
import Description from './components/Description/Description';
import Experience from './components/Experience/Experience';
import Conferences from './components/Conferences/Conferences';
import Communities from './components/Communities/Communities';
import Favorites from './components/Favorites/Favorites';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
      <Description />
      <Experience />
      <Conferences />
      <Communities />
      <Favorites />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
